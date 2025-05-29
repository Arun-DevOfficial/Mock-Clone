import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
    const isAuthenticated: string | undefined = cookieStore.get("accessToken")?.value;
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
