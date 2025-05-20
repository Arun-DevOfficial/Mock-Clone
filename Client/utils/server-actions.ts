"use server";
import { MockFormData } from "@/types/mock";
import { revalidateTag } from "next/cache";

//GET : Get ALL Mocks
export async function fetchMocks(): Promise<MockFormData[]> {
  const response = await fetch(
    "https://mock-clone.onrender.com/api/mocks/all",
    {
      cache: "no-store", // OR: next: { tags: ['mocks'] }
      next: { tags: ["mocks"] },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch mocks");
  }
  const data = await response.json();
  return data;
}

//DELETE : Delete a mock by Id
export async function handleDeleteMock(id: string | undefined) {
  try {
    const res = await fetch(
      `https://mock-clone.onrender.com/api/mocks/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete mock");
    }

    // Revalidate the tag used by fetchMocks()
    revalidateTag("mocks");
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
}

//GET : To get a mock by id
export async function getMockById(id: string) {
  const response = await fetch(
    `https://mock-clone.onrender.com/api/mocks/response/${id}`,
    {
      cache: "no-store",
      next: { tags: ["mocks"] },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch mock by id");
  }
  const data = await response.json();
  console.log("Server Actions");
  return data;
}
