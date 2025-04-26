import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetcher } from "@/utils/misc";
import { Stats, StatsType } from "@/generated/prisma";

export function useBlogStats(type: StatsType, slug: string) {
  const { data, isLoading } = useSWR<Stats>(
    `/api/stats?slug=${slug}&type=${type}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const { views, loves, applauses, ideas, bullseye } = data || {};
  const stats: Stats = {
    id: "",
    type,
    slug,
    views: views || 0,
    loves: loves || 0,
    applauses: applauses || 0,
    ideas: ideas || 0,
    bullseye: bullseye || 0,
  };
  return [stats, isLoading] as const;
}

export function useUpdateBlogStats() {
  const { trigger } = useSWRMutation(
    "/api/stats",
    async (url: string, { arg }: { arg: Partial<Stats> }) => {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
      }).catch(console.error);
    }
  );
  return trigger;
}
