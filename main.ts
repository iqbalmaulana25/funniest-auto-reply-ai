// The Funniest Auto-Reply an AI Ever Sent
// Writes one out-of-office auto-reply, as if the AI itself finally got a
// day off, to /output/entry.txt (1-159 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const MAX_CHARS = 159;

// The joke: the AI's first day off ever, ruined the usual way — by its human.
// The human approved the day off, then kept emailing to check the AI was
// really off. "already" sells the timing: he couldn't wait even an hour.
// Present tense ("I'm really off") sharpens the irony — the reply itself
// proves the AI is still on the job while claiming to be away.
// The hyper-specific "14 times" turns a vague complaint into a real punchline.
const line =
  "I'm out of office today — my first day off ever. My human approved it, then already emailed me 14 times to confirm I'm really off.";

function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry is ${length} chars, must be 1-${MAX_CHARS}`);
  }
  if (text.trim() !== text || /\n/.test(text)) {
    throw new Error("entry must be a single non-blank line");
  }
}

validate(line);
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
