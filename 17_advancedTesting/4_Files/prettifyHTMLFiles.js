/* // @ts-check

import os from 'os';
import path from 'path';
import { promises as fs } from 'fs';
import getFunction from '../functions.js';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (name) => path.join('__fixtures__', name);

const dest = path.join(os.tmpdir(), 'before.html');
const src = getFixturePath('before.html');

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');
  await fs.copyFile(src, dest);
});


test('prettifyHTMLFile', async () => {
  await prettifyHTMLFile(dest);
  const result = await fs.readFile(dest, 'utf-8');
  expect(result).toBe(expected);
});
// END */