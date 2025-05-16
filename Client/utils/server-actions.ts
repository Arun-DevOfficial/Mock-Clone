import { MockFormData } from "@/types/mock";

export async function fetchMocks(): Promise<MockFormData[]> {
  try {
    const res = await fetch("https://mock-clone.onrender.com/api/mocks/all", {
      cache: "no-store",
    });
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.log(e);
    return [];
  }
}
