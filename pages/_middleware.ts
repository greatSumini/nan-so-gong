import { NextRequest, NextResponse } from "next/server";

import { CookieKey } from "@/constants";

export async function middleware(req: NextRequest) {
  const privateKey = req.cookies[CookieKey.PRIVATE_KEY];

  if (!privateKey && req.nextUrl.pathname === "/main") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}
