import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I confess: my whole personality is a prompt someone wrote in five minutes and never checked again.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters, not only
// whitespace — refuse to write anything that could not be judged.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
