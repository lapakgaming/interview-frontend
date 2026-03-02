import { NextResponse } from "next/server";
import {
  findGameById,
  updateGame,
  deleteGame,
} from "@/lib/games-store";
import type { GameUpdateInput } from "@/types/game";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const game = findGameById(id);
  if (!game) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }
  return NextResponse.json(game);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = (await request.json()) as GameUpdateInput;
    const game = updateGame(id, body);
    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }
    return NextResponse.json(game);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = deleteGame(id);
  if (!deleted) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
