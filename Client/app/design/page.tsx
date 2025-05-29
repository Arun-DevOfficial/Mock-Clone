import NewMockForm from "@/components/NewMockForm";
import { cookies } from "next/headers";

export default async function NewMock() {
  const cookieStore = await cookies(); // ✅ No await
  const accessToken = cookieStore.get("accessToken")?.value;

  return (
    <section>
      <h1 className="text-center text-4xl font-light my-6 p-5">
        Design New Mock
      </h1>
      <div className="flex justify-center items-center w-full py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <NewMockForm accessToken={accessToken} />
      </div>
    </section>
  );
}
