import { cookies } from "next/headers";

async function getAccessToken() {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("accessToken")?.value;
  if (!token) throw new Error("Access token not found in cookies");
  return token;
}

export default getAccessToken;
