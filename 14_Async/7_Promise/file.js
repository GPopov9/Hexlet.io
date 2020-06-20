// @ts-check
/* eslint-disable import/prefer-default-export */
/* import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const reverse = (file) => {
  return fs.readFile(file, 'utf-8')
    .then((content) => fs.writeFile(file, content.split('\n').reverse().join('\n')));
}; */
// END

// BEGIN (Tutor)
/* export const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fs.writeFile(filepath, preparedData);
  }); */
// END