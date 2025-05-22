import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { isAuthenticated } = await getKindeServerSession();
  return (
    <header className="py-4 container mx-auto w-full max-w-[65%]">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-3xl text-[#4E4949] cursor-pointer">
          MockAPI
        </Link>
        {isAuthenticated() ? (
          <div className="flex items-center gap-12">
            <div className="hidden bg-white/80 rounded-full sm:flex gap-5 border border-gray-300 px-6 py-3 divide-x-2 divide-gray-200">
              <Link
                href="#"
                className="capitalize text-md font-medium text-gray-700 pr-4"
              >
                How it works
              </Link>
              <Link
                href="/manage"
                className="capitalize text-md font-medium text-gray-700"
              >
                Manage my mock
              </Link>
            </div>
            <Link
              href="/design"
              className="capitalize text-md text-white bg-emerald-500 px-6 py-3 font-medium rounded-full"
            >
              New Mock
            </Link>
            <LogoutLink className="text-md font-medium text-gray-700 hover:text-red-500">
              Logout
            </LogoutLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <LoginLink className="text-md font-medium text-gray-700">
              Login
            </LoginLink>
          </div>
        )}
      </nav>
    </header>
  );
}
