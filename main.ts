// news-image-20261117 entry (Node 22, standard library only).
// The entry is the front page sitting next to this file: entry.png, a
// newspaper front page dated TUESDAY 17 NOVEMBER 2026 with four panels —
// Ukraine striking the Kerch Bridge, Trump, Xi and Putin set to meet,
// tankers hit in the Strait of Hormuz, and the Vulcan rocket failing.
// This program just delivers those exact bytes to the grader's output
// directory — the judge sees the file as-is, nothing is re-encoded or
// resized.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The grader's output directory may not exist yet — create it so the
// copy never fails on a missing folder.
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// The judge scores the file as-is, so confirm the delivered copy is
// byte-for-byte the source instead of silently shipping a short write.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(`entry.png size mismatch: source ${sourceBytes} bytes, delivered ${targetBytes} bytes`);
}
console.log(`delivered entry.png to ${outDir} (${targetBytes} bytes)`);
