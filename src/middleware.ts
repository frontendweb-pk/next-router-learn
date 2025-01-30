import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest) {
  const agent = userAgent(req);

  return NextResponse.next();
}
