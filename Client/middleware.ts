export { withAuth as middleware } from "@kinde-oss/kinde-auth-nextjs/middleware";

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
