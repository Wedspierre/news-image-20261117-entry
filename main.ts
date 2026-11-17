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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The grader's output directory may not exist yet — create it so the
// copy never fails on a missing folder.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`delivered entry.png to ${outDir}`);
