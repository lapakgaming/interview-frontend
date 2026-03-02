import type { Game } from "@/types/game";

const now = () => new Date().toISOString();

const initialGames: Game[] = [
  { id: "game-1", name: "Mobile Legends", slug: "mobile-legends", imageUrl: "https://picsum.photos/400/300?random=1", description: "MOBA 5v5. Top-up diamonds for skins and heroes.", createdAt: "2026-02-01T10:00:00Z", updatedAt: "2026-02-01T10:00:00Z" },
  { id: "game-2", name: "Free Fire", slug: "free-fire", imageUrl: "https://picsum.photos/400/300?random=2", description: "Battle royale. Top-up diamonds for in-game items.", createdAt: "2026-02-01T10:01:00Z", updatedAt: "2026-02-01T10:01:00Z" },
  { id: "game-3", name: "PUBG Mobile", slug: "pubg-mobile", imageUrl: "https://picsum.photos/400/300?random=3", description: "Battle royale. UC for passes and cosmetics.", createdAt: "2026-02-01T10:02:00Z", updatedAt: "2026-02-01T10:02:00Z" },
  { id: "game-4", name: "Genshin Impact", slug: "genshin-impact", imageUrl: "https://picsum.photos/400/300?random=4", description: "Open-world RPG. Top-up Genesis Crystals for wishes.", createdAt: "2026-02-01T10:03:00Z", updatedAt: "2026-02-01T10:03:00Z" },
  { id: "game-5", name: "Valorant", slug: "valorant", imageUrl: "https://picsum.photos/400/300?random=5", description: "Tactical FPS. VP for battle pass and skins.", createdAt: "2026-02-01T10:04:00Z", updatedAt: "2026-02-01T10:04:00Z" },
  { id: "game-6", name: "Honor of Kings", slug: "honor-of-kings", imageUrl: "https://picsum.photos/400/300?random=6", description: "MOBA. Top-up for heroes and skins.", createdAt: "2026-02-01T10:05:00Z", updatedAt: "2026-02-01T10:05:00Z" },
  { id: "game-7", name: "Clash of Clans", slug: "clash-of-clans", imageUrl: "https://picsum.photos/400/300?random=7", description: "Strategy. Gems for speed-ups and resources.", createdAt: "2026-02-01T10:06:00Z", updatedAt: "2026-02-01T10:06:00Z" },
  { id: "game-8", name: "Clash Royale", slug: "clash-royale", imageUrl: "https://picsum.photos/400/300?random=8", description: "Card battler. Gems and chests.", createdAt: "2026-02-01T10:07:00Z", updatedAt: "2026-02-01T10:07:00Z" },
  { id: "game-9", name: "Call of Duty Mobile", slug: "cod-mobile", imageUrl: "https://picsum.photos/400/300?random=9", description: "FPS. CP for battle pass and bundles.", createdAt: "2026-02-01T10:08:00Z", updatedAt: "2026-02-01T10:08:00Z" },
  { id: "game-10", name: "League of Legends: Wild Rift", slug: "wild-rift", imageUrl: "https://picsum.photos/400/300?random=10", description: "MOBA. Wild Cores for skins and passes.", createdAt: "2026-02-01T10:09:00Z", updatedAt: "2026-02-01T10:09:00Z" },
  { id: "game-11", name: "FIFA Mobile", slug: "fifa-mobile", imageUrl: "https://picsum.photos/400/300?random=11", description: "Football. FIFA Points for packs and players.", createdAt: "2026-02-01T10:10:00Z", updatedAt: "2026-02-01T10:10:00Z" },
  { id: "game-12", name: "Roblox", slug: "roblox", imageUrl: "https://picsum.photos/400/300?random=12", description: "Platform. Robux for avatar and game access.", createdAt: "2026-02-01T10:11:00Z", updatedAt: "2026-02-01T10:11:00Z" },
  { id: "game-13", name: "Brawl Stars", slug: "brawl-stars", imageUrl: "https://picsum.photos/400/300?random=13", description: "Brawler. Gems and Brawl Pass.", createdAt: "2026-02-01T10:12:00Z", updatedAt: "2026-02-01T10:12:00Z" },
  { id: "game-14", name: "Arena of Valor", slug: "arena-of-valor", imageUrl: "https://picsum.photos/400/300?random=14", description: "MOBA. Vouchers for heroes and skins.", createdAt: "2026-02-01T10:13:00Z", updatedAt: "2026-02-01T10:13:00Z" },
  { id: "game-15", name: "MLBB Advance Server", slug: "mlbb-advance", imageUrl: "https://picsum.photos/400/300?random=15", description: "MOBA test server. Diamond top-up.", createdAt: "2026-02-01T10:14:00Z", updatedAt: "2026-02-01T10:14:00Z" },
  { id: "game-16", name: "Stumble Guys", slug: "stumble-guys", imageUrl: "https://picsum.photos/400/300?random=16", description: "Party battle royale. Gems for cosmetics.", createdAt: "2026-02-01T10:15:00Z", updatedAt: "2026-02-01T10:15:00Z" },
  { id: "game-17", name: "Lords Mobile", slug: "lords-mobile", imageUrl: "https://picsum.photos/400/300?random=17", description: "Strategy MMO. Gems and packs.", createdAt: "2026-02-01T10:16:00Z", updatedAt: "2026-02-01T10:16:00Z" },
  { id: "game-18", name: "State of Survival", slug: "state-of-survival", imageUrl: "https://picsum.photos/400/300?random=18", description: "Survival strategy. Biocaps and bundles.", createdAt: "2026-02-01T10:17:00Z", updatedAt: "2026-02-01T10:17:00Z" },
  { id: "game-19", name: "Cookie Run: Kingdom", slug: "cookie-run-kingdom", imageUrl: "https://picsum.photos/400/300?random=19", description: "RPG. Crystals and passes.", createdAt: "2026-02-01T10:18:00Z", updatedAt: "2026-02-01T10:18:00Z" },
  { id: "game-20", name: "Tower of Fantasy", slug: "tower-of-fantasy", imageUrl: "https://picsum.photos/400/300?random=20", description: "Open-world RPG. Tanium for pulls.", createdAt: "2026-02-01T10:19:00Z", updatedAt: "2026-02-01T10:19:00Z" },
];

export const games: Game[] = initialGames;

export function findGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}

export function findGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function createGame(
  input: Omit<Game, "id" | "createdAt" | "updatedAt">
): Game {
  const id = `game-${Date.now()}`;
  const createdAt = now();
  const updatedAt = createdAt;
  const game: Game = { ...input, id, createdAt, updatedAt };
  games.push(game);
  return game;
}

export function updateGame(
  id: string,
  input: Partial<Omit<Game, "id" | "createdAt" | "updatedAt">>
): Game | null {
  const index = games.findIndex((g) => g.id === id);
  if (index === -1) return null;
  const updatedAt = now();
  games[index] = { ...games[index], ...input, updatedAt };
  return games[index];
}

export function deleteGame(id: string): boolean {
  const index = games.findIndex((g) => g.id === id);
  if (index === -1) return false;
  games.splice(index, 1);
  return true;
}
