import { get, post, put, del } from "./client";
import type { Game, GameCreateInput, GameUpdateInput } from "@/types/game";

const BASE_PATH = "/api/games";

export interface GamesListParams {
  search?: string;
}

export const gamesApi = {
  list: (params?: GamesListParams) => {
    const query = params?.search ? `?search=${encodeURIComponent(params.search)}` : "";
    return get<Game[]>(`${BASE_PATH}${query}`);
  },

  getById: (id: string) => get<Game>(`${BASE_PATH}/${id}`),

  create: (data: GameCreateInput) => post<Game, GameCreateInput>(BASE_PATH, data),

  update: (id: string, data: GameUpdateInput) =>
    put<Game, GameUpdateInput>(`${BASE_PATH}/${id}`, data),

  delete: (id: string) => del(`${BASE_PATH}/${id}`),
};
