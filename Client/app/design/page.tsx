import NewMockForm from "@/components/NewMockForm";

export default function NewMock() {
  return (
    <section>
      <h1 className="text-center text-4xl font-light my-6 p-5">Design New Mock</h1>
      <div className="flex justify-center items-center w-full py-12 bg-gray-100/60">
        <NewMockForm />
      </div>
    </section>
  );
}
