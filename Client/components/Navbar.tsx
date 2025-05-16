import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4 container mx-auto max-w-[60%]">
      <nav className="flex items-center justify-between px-4 py-2">
        <Image
          src="https://designer.mocky.io/static/media/logo-dark.2d24ebf2.png"
          alt="Logo"
          className="hover:bg-sky-600"
          width={125}
          height={125}
        />
        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href="/" className="rounded-lg hover:bg-gray-100 px-5 py-2.5 shadow cursor-pointer border border-gray-300 font-semibold text-neutral-800 uppercase text-sm bg-white">
            Manage My Mocks
          </Link>
          <Link href="/design" className="bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer rounded-lg px-5 py-2.5 font-semibold uppercase text-sm">
            New Mocks
          </Link>
        </div>
      </nav>
    </header>
  );
}
