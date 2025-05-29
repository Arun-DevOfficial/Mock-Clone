"use client";

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  console.log("Client Cookie:", value);
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()!.split(";").shift() || null;
  }
  return null;
}

export default getCookie;
