function parseString(input: string): object | null {
  // Remove escaped newlines \n and trim spaces
  let cleaned: string = input.replace(/\\n/g, "").trim();

  // If it looks like a stringified JSON array or object (starts and ends with quotes)
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    // Remove wrapping quotes
    cleaned = cleaned.slice(1, -1);
    // Unescape inner quotes
    cleaned = cleaned.replace(/\\"/g, '"');
  }

  // For something like { message:"Hello World" }, add quotes around keys
  cleaned = cleaned.replace(/([{,])\s*(\w+)\s*:/g, '$1"$2":');

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Parsing error:", e);
    return null;
  }
}

export default parseString;
