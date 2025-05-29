import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  console.log("AccessToken :", token);
  // Todo : validate access Token
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/design",
    "/design/view",
    "/design/view/:id*",
    "/manage",
    "/design/confirmation",
    "/design/confirmation/:id*",
  ],
};
