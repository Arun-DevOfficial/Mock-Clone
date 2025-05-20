export function getAuthToken() {
  try {
    const accessToken = localStorage.getItem("user");
    if (!accessToken) {
      throw new Error("No access token found in localStorage.");
    }
    return accessToken;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
}
