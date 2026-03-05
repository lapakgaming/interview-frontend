import { get } from "./client";
import type { Product } from "@/types/product";

const BASE_PATH = "/api/products";

export const productsApi = {
  getById: (id: string) => get<Product>(`${BASE_PATH}/${id}`),
};
