// make.fun - One Word From Grandma
// Entry: exactly one word from grandma (30 chars max)
import fs from 'node:fs';
import path from 'node:path';
const word = "Unplugit";
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), word, 'utf8');
console.log(`Wrote word (${word.length} chars) to ${path.join(dir, 'entry.txt')}`);
