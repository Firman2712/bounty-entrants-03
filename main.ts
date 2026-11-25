// Entry for make.fun bounty-entrants-03: the entry is the sponsored bounties
// named in BOUNTY.json at this repository's root. This program copies that
// file into the grader's output directory, where the gate reads it. Nothing
// this program writes about the bounties is scored: the house counts the
// bounties' entrants in its own database.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'BOUNTY.json'), join(OUTPUT_DIR, 'BOUNTY.json'));
