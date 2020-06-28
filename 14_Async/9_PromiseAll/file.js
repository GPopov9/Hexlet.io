/* // @ts-check
/* eslint-disable import/prefer-default-export */
/* import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';
 */
// BEGIN (write your solution here)
export const getDirectorySize = (dirpath) => fs.readdir(dirpath)
  .then((content) => {
    const filepaths = content.map((el) => path.join(dirpath, el));
    const promises = filepaths.map((filepath) => fs.stat(filepath));
    return Promise.all(promises);
  })
  .then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
// END 