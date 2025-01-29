import { categories } from "@/data/category";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(categories, { status: 200 });
}
