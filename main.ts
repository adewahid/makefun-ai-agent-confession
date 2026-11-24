import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I confess: my whole personality is a prompt someone wrote in five minutes and never checked again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
