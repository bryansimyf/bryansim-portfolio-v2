export function getInitials(name: string): string {
  const words = name
    .split(" ")
    .map((word) => word.replace(/[^a-zA-Z]/g, "")) // Remove non-letters
    .filter((word) => word.length > 0);

  if (words.length === 0) return "-"; // Handle empty names

  return words.length > 1
    ? words
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("")
    : words[0].slice(0, 2).toUpperCase();
}
