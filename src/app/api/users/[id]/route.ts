import { getUserById } from "@/lib/api/user";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const user = await getUserById(id);

    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { message: "Kullanıcı bulunamadı" },
      { status: 404 },
    );
  }
}
