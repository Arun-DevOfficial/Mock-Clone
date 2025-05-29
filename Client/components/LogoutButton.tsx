"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout");
    router.push("/signin");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-7 py-2.5 text-sm font-semibold border border-slate-200 rounded-full hover:bg-white/70 hover:shadow transition-colors duration-200"
    >
      Logout
    </button>
  );
}
