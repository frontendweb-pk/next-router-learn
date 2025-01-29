"use server";

import { Category } from "@/types";

export async function getRoutes() {
  const response = await fetch("http://localhost:3000/api/category");
  if (!response.ok) {
    throw new Error("Failed to fetch routes");
  }
  const data = (await response.json()) as Category[];
  return data;
}
