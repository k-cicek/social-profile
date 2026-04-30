import { getUserPosts } from "@/lib/api/user";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? "1");
    const limit = Number(searchParams.get("limit") ?? "10");

    const result = await getUserPosts(id, page, limit);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { message: "Paylaşımlar bulunamadı" },
      { status: 404 },
    );
  }
}
