// @ts-check
/* eslint-disable import/prefer-default-export */
/* import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const getTypes = (filePaths) => {
  const initPromise = Promise.resolve([]);
  const promise = filePaths.reduce((acc, path) => {
    const newAcc = acc.then((contents) => fs.stat(path)
      .then((data) => (data.isFile() ? contents.concat('file') : contents.concat('directory')))
      .catch(() => contents.concat(null)));
    return newAcc;
  }, initPromise);
  return promise;
}; */
// END

// BEGIN (Tutor)
/* const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
}; */
// END