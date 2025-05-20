import { NextRequest, NextResponse } from "next/server";
// import { getAuthToken } from "@/utils/getAuth";

// Todo : Implenenting redirect logic
export function middleware(request: NextRequest) {
  // Todo : retrieve a accessToken
  const accessToken = "";
  // Validate that whether true or false
  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: [
    "/design",
    "/design/view",
    "/design/view/:id*",
    "/manage",
    "/design/confirmation",
    "/design/confirmation/:id*",
  ],
};
