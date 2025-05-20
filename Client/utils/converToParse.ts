function parseString(input: string): Record<string, any>[] {
  try {
    const parsed = JSON.parse(input);

    if (Array.isArray(parsed)) {
      return parsed;
    } else if (typeof parsed === "object" && parsed !== null) {
      return [parsed]; // wrap single object in an array
    } else {
      throw new Error("Parsed result is not valid");
    }
  } catch (err) {
    console.error("Failed to parse JSON:", (err as Error).message);
    return []; // return empty array on failure
  }
}
export default parseString;
