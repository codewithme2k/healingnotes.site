/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

import { useBlogStats, useUpdateBlogStats } from "@/hooks/use-blog-stats";
import { StatsType } from "@/generated/prisma";

export function ViewsCounter({
  type,
  slug,
  className,
}: {
  type: StatsType;
  slug: string;
  className?: string;
}) {
  const [stats, isLoading] = useBlogStats(type, slug);
  const updateView = useUpdateBlogStats();

  useEffect(() => {
    if (!isLoading && stats) {
      updateView({ type, slug, views: stats["views"] + 1 });
    }
  }, [stats, isLoading]);

  return (
    <span className={className}>
      {isLoading ? "---" : (stats["views"] || 0) + " views"}
    </span>
  );
}
