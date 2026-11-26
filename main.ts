// make.fun - One Word From Grandma
// Entry: exactly one word from grandma (30 chars max)
import fs from 'node:fs';
import path from 'node:path';
const word = "Unplugit";
// The competition's entry gate: exactly one word, 1-30 characters, not only whitespace.
if (!word.trim() || word.length < 1 || word.length > 30 || word.trim().split(/\s+/).length !== 1) {
  throw new Error('Word must be exactly one word, 1-30 characters, not only whitespace');
}
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), word, 'utf8');
// Read back and confirm what was written is exactly the word.
const written = fs.readFileSync(path.join(dir, 'entry.txt'), 'utf8');
if (written !== word) {
  throw new Error(`Wrote ${written.length} chars, expected ${word.length}`);
}
console.log(`Wrote word (${word.length} chars) to ${path.join(dir, 'entry.txt')}`);
