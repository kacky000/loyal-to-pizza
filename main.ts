import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A roast of the smart speaker: deaf to the one word you shout, devoted to the one you mumbled.
const roast =
  "My smart speaker can't hear me yell \"STOP\" over its own music, but it caught me mumbling \"pizza\" two rooms away and has stayed loyal to that word ever since.";

const limit = 200;
if ([...roast].length > limit) throw new Error(`roast is ${[...roast].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), roast);
