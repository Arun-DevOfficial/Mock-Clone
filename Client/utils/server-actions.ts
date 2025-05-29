"use server";

import { MockFormData } from "@/types/mock";
import { revalidateTag } from "next/cache";
import axios from "axios";
import getAccessToken from "./getAccess";

export async function fetchMocks(): Promise<MockFormData[]> {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get("http://localhost:4201/api/mocks/all", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch mocks:", error);
    throw new Error("Failed to fetch mocks");
  }
}

export async function handleDeleteMock(id: string | undefined) {
  const accessToken = await getAccessToken();

  try {
    const res = await fetch(`http://localhost:4201/api/mocks/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

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

// GET : To get a mock by id
export async function getMockById(id: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(
    `https://mock-clone.onrender.com/api/mocks/response/${id}`,
    {
      cache: "no-store",
      next: { tags: ["mocks"] },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch mock by id");
  }
  const data = await response.json();
  console.log("Server Actions");
  return data;
}
