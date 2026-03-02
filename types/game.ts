export interface Game {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export type GameCreateInput = Omit<Game, "id" | "createdAt" | "updatedAt">;
export type GameUpdateInput = Partial<GameCreateInput>;
