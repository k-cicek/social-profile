import { getUserStats } from "@/lib/api/user";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const stats = await getUserStats(id);

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      { message: "İstatistik bulunamadı" },
      { status: 404 },
    );
  }
}
