export const dynamic = "force-dynamic";

import Link from "next/link";
import { fetchMocks } from "@/utils/server-actions";
import { MockFormData } from "@/types/mock";
import MockTable from "@/components/mocktable";

export default async function Home() {
  let data: MockFormData[] = [];
  try {
    data = await fetchMocks();
  } catch (error) {
    console.error("Failed to fetch mocks:", error);
  }

  return (
    <main>
      <section>
        <h1 className="text-center text-4xl font-light">Manage your mocks</h1>
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-32 w-full my-12 flex justify-center item-center px-5">
          {Array.isArray(data) && data.length === 0 ? (
            <div className="flex flex-col gap-6">
              <h1 className="self-center text-4xl font-light font-neutral-800">
                Your mocky repository is empty...
              </h1>
              <Link
                href="/design"
                className="bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer rounded-lg self-center px-5 py-2.5 font-semibold uppercase text-sm"
              >
                Create New Mocks
              </Link>
            </div>
          ) : (
            <MockTable data={Array.isArray(data) ? data : []} />
          )}
        </div>
      </section>
    </main>
  );
}
