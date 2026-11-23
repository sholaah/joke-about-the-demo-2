import { mkdirSync, writeFileSync } from "node:fs";

// The joke about the demo — exactly 129 Unicode code points.
// Written as a single constant so the output is fully deterministic.
const JOKE =
  "My AI coding agent is so fast that during the demo it fixed the bug, shipped two new ones, and blamed me — in the commit message.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf8");
}

main();
