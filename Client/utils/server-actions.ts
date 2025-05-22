"use server";
import { MockFormData } from "@/types/mock";
import { revalidateTag } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";

// export async function fetchMocks(): Promise<MockFormData[]> {

//   const { getAccessTokenRaw } = getKindeServerSession();
//   const accessToken = await getAccessTokenRaw();
//   try {
//     const response = await axios.get(
//       "http://localhost:4201/api/mocks/all",
//       {
//         headers: {
//           "Cache-Control": "no-store",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log(response.data)
//     revalidateTag("mocks"); // revaliate to get fresh data
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch mocks");
//   }
// }

//DELETE : Delete a mock by Id

export async function fetchMocks(): Promise<MockFormData[]> {
  const { getAccessTokenRaw } = getKindeServerSession();
  const accessToken = await getAccessTokenRaw();

  try {
    const response = await axios.get("http://localhost:4201/api/mocks/all", {
      headers: {
        "Cache-Control": "no-store",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch mocks");
  }
}

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
