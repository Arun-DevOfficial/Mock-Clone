import Link from "next/link";
import { Button } from "./ui/button";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token: string | undefined = cookieStore.get("accessToken")?.value;

  const isAuthenticated = Boolean(token);

  return (
    <header className="py-4 container mx-auto w-full max-w-[65%]">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-3xl text-[#4E4949] cursor-pointer">
          MockAPI
        </Link>
        {isAuthenticated ? (
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
            <div className="flex gap-x-5">
              <Link
                href="/design"
                className="capitalize text-md text-white bg-emerald-500 px-6 py-3 font-medium rounded-full"
              >
                New Mock
              </Link>
              <LogoutButton />
            </div>
          </div>
        ) : (
          <Link href={"/sigin"}>
            <Button className="text-md font-medium text-white py-3 px-6" size={"lg"}>
              Sign In
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}
