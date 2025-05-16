import { MockFormData } from "@/types/mock";

type ModelTypeProps = {
  onClose: () => void;
  data: MockFormData | null;
};

export default function Model({ onClose, data }: ModelTypeProps) {
  console.log(data);
  return (
    <main className="p-4 relative inset-0 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Mock Data Details</h1>
      <h1>HTTP BODY</h1>
      <div>
        <pre className="bg-gray-100 p-4 rounded-md">
          {data?.httpBody || "No HTTP Body"}
        </pre>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        Close
      </button>
    </main>
  );
}
