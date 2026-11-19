// tsc does not copy .graphql files; EverShop loads them from dist/.
import { cpSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const from = resolve(root, 'src/graphql');
const to = resolve(root, 'dist/graphql');
if (existsSync(from)) {
  cpSync(from, to, {
    recursive: true,
    filter: (src) => !src.endsWith('.ts') && !src.endsWith('.tsx')
  });
}
console.log('graphql assets copied');
