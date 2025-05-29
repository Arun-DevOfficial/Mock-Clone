import { NextRequest, NextResponse } from "next/server";
import getAccessToken from "./utils/getAccess";

export async function middleware(req: NextRequest) {
  const isAuthenticated = await getAccessToken();
  // Todo: Validate user login
  if (!isAuthenticated) {
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
