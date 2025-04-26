import { Stats, StatsType } from "@/generated/prisma";
import db from "@/utils/prisma";
import type { NextRequest } from "next/server";

const getBlogStats = async (slug: string, type: StatsType): Promise<Stats> => {
  let result: Stats | null;

  result = await db.stats.findUnique({
    where: {
      type_slug: { slug, type },
    },
  });

  if (!result) {
    result = await db.stats.create({
      data: { type, slug },
    });
  }

  return result;
};

const updateBlogStats = async (
  type: StatsType,
  slug: string,
  updates: Partial<Stats>
): Promise<Stats> => {
  const currentStats = await getBlogStats(slug, type);

  const numericKeys: (keyof Pick<
    Stats,
    "views" | "loves" | "applauses" | "ideas" | "bullseye"
  >)[] = ["views", "loves", "applauses", "ideas", "bullseye"];

  for (const key of numericKeys) {
    if (
      typeof updates[key] === "number" &&
      typeof currentStats[key] === "number" &&
      updates[key]! < currentStats[key]!
    ) {
      updates[key] = currentStats[key];
    }
  }

  const updated = await db.stats.update({
    where: {
      type_slug: { slug, type },
    },
    data: updates,
  });

  return updated;
};
export async function GET(request: NextRequest) {
  try {
    const { searchParams: params } = new URL(request.url);
    const slug = params.get("slug");
    const type = params.get("type");

    // Check if the type is a valid StatsType
    if (!slug || !type || !isValidStatsType(type)) {
      return Response.json(
        { message: "Missing or invalid `type` or `slug` parameter!" },
        { status: 400 }
      );
    }

    const data = await getBlogStats(slug, type as StatsType); // Type cast after validation
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json(
      { message: "Internal Server Error!" },
      { status: 500 }
    );
  }
}

// Type guard to check if the string is a valid StatsType
function isValidStatsType(type: string): type is StatsType {
  return type === "blog" || type === "snippet";
}

export async function POST(request: NextRequest) {
  try {
    const data: Stats = await request.json();
    const { type, slug, ...updates } = data;
    if (!slug || !type) {
      return Response.json(
        { message: "Missing `type` or `slug` parameter!" },
        {
          status: 400,
        }
      );
    }
    const updatedStats = await updateBlogStats(type, slug, updates);
    return Response.json(updatedStats);
  } catch (e) {
    console.error(e);
    return Response.json(
      { message: "Internal Server Error!" },
      { status: 500 }
    );
  }
}
