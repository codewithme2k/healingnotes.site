import type { Author, Blog, Snippet } from "contentlayer/generated";
import type { ReactNode } from "react";

import { Banner } from "@/components/blog/banner";
import { BlogMeta } from "@/components/blog/blog-meta";
import { Comments } from "@/components/blog/comments";
import { PostNav } from "@/components/blog/post-nav";
import { PostTitle } from "@/components/blog/post-title";

import { ScrollButtons } from "@/components/blog/scroll-buttons";
import { SocialShare } from "@/components/blog/social-share";
import { TagsList } from "@/components/blog/tags";
import { TableOfContents } from "@/components/blog/toc";
import { Container } from "@/components/ui/container";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { SITE_METADATA } from "@/data/site-metadata";

import type { CoreContent } from "@/types/data";
import { StatsType } from "@/generated/prisma";
import Reactions from "@/components/blog/reactions";

interface LayoutProps {
  content: CoreContent<Blog | Snippet>;
  authorDetails: CoreContent<Author>[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export function PostLayout({ content, next, prev, children }: LayoutProps) {
  const {
    slug,
    images,
    lastmod,
    readingTime,
    date,
    filePath,
    title,
    tags,
    toc,
    type,
  } = content;
  const postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`;

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />
      <article className="pt-6">
        <div className="space-y-4">
          <TagsList tags={tags} />
          <PostTitle>{title}</PostTitle>
          <div className="space-y-4 pt-4 md:pt-10">
            <Banner banner={images?.[0] || SITE_METADATA.socialBanner} />
          </div>
          <div className="flex items-center justify-between gap-2 pb-4 lg:pt-2">
            <BlogMeta
              date={date}
              lastmod={lastmod}
              type={type.toLowerCase() as StatsType}
              slug={slug}
              readingTime={readingTime}
            />
            <SocialShare
              postUrl={postUrl}
              filePath={filePath}
              title={title}
              className="hidden md:flex"
            />
          </div>
        </div>
        <GradientDivider className="mb-2 mt-1" />
        <div className="grid grid-cols-1 gap-12 pb-10 pt-8 lg:grid-cols-12 lg:pt-10">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
            <div className="prose max-w-none dark:prose-invert lg:prose-lg lg:pb-8">
              {children}
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              <TableOfContents toc={toc} />
              <Reactions
                className="pt-6"
                type={type.toLowerCase() as StatsType}
                slug={slug}
              />
            </div>
          </div>
        </div>
        <GradientDivider />
        <div className="space-y-4">
          <PostNav
            next={next}
            nextLabel="Next post"
            prev={prev}
            prevLabel="Previous post"
          />
          <Comments configs={{ reactions: "0" }} />
        </div>
      </article>
    </Container>
  );
}
