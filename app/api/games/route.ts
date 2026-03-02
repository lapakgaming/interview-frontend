import { NextResponse } from "next/server";
import { games, createGame } from "@/lib/games-store";
import type { GameCreateInput } from "@/types/game";

export function GET() {
  return NextResponse.json(games);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GameCreateInput;
    const { name, slug, imageUrl, description } = body;
    if (!name || !slug || !imageUrl || !description) {
      return NextResponse.json(
        { error: "Missing required fields: name, slug, imageUrl, description" },
        { status: 400 }
      );
    }
    const game = createGame({ name, slug, imageUrl, description });
    return NextResponse.json(game, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
