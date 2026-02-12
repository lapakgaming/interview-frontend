/**
 * Product type – matches the API response from GET /api/products/[id]
 * Use this (or extend it) when implementing the PDP.
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  lastUpdated: string; // ISO 8601
}
