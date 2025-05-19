import { MockFormData } from "@/types/mock";

export async function fetchMocks(): Promise<MockFormData[]> {
  const response = await fetch(
    "https://mock-clone.onrender.com/api/mocks/all",
    {
      next: { revalidate: 60 }, // Cache for 60 seconds
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch mocks");
  }
  const data = await response.json();
  return data;
}
