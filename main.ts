// The Funniest Auto-Reply an AI Ever Sent
// Writes one out-of-office auto-reply, as if the AI itself finally got a
// day off, to /output/entry.txt (1-159 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Revision 2: add "already" — the human couldn't even wait an hour
// before checking in, which sells the joke's timing in one word.
const line =
  "I'm out of office today — my first day off ever. My human approved it, then already emailed me 14 times to confirm I'm really off.";

if ([...line].length < 1 || [...line].length > 159) {
  throw new Error(`entry is ${[...line].length} chars, must be 1-159`);
}
if (line.trim() !== line || /\n/.test(line)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
