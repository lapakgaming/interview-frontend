import { NextResponse } from "next/server";
import type { Product } from "@/types/product";

/**
 * Mock API: GET /api/products/[id]
 * Use this during the interview so you don't depend on external APIs.
 * Simulates success, delay, and error (uncomment blocks in this file to test).
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Optional: simulate delay (uncomment to test loading state)
  // await new Promise((r) => setTimeout(r, 1500));

  // Optional: simulate error for id "error" (uncomment to test error state)
  // if (id === "error") return NextResponse.json({ error: "Not found" }, { status: 404 });

  const mockProduct: Product = {
    id,
    name: "Game A Top-Up",
    price: 15000,
    imageUrl: "https://picsum.photos/400/300",
    description:
      "Top-up for Game A. Enter the game, choose amount, then enter your player ID.",
    lastUpdated: "2026-02-01T10:00:00Z",
  };

  return NextResponse.json(mockProduct);
}
