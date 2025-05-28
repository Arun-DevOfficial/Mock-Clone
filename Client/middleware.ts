import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth({
  loginPage: "/api/auth/login",
  isReturnToProtected: true,
});

export const config = {
  matcher: [
    "/design",
    "/design/view",
    "/design/view/:id*",
    "/manage",
    "/design/confirmation",
    "/design/confirmation/:id*",
    "!/api/auth/(.*)", // Exclude KindeAuth routes
    "!/", // Explicitly exclude homepage
  ],
};