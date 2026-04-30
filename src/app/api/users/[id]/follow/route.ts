import { toggleFollowUser } from "@/lib/api/user";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(_: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const result = await toggleFollowUser(id);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Follow API error:", error);

    return NextResponse.json(
      { message: "Follow action failed" },
      { status: 500 },
    );
  }
}
