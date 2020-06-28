/* // @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { waterfall } from 'async';

// BEGIN (write your solution here)
export const unionFiles = (path1, path2, outputPath, cb) => {
  const readFile1 = (callback) => {
    fs.readFile(path1, 'utf8', (err, data) => {
      callback(err, data);
    });
  };

  const readFile2 = (arg1, callback) => {
    fs.readFile(path2, 'utf8', (err, data2) => {
      callback(err, arg1, data2);
    });
  };

  const writeFile = (arg1, arg2, callback) => {
    fs.writeFile(outputPath, `${arg1}${arg2}`, (err) => callback(err));
  };

  waterfall([
    readFile1,
    readFile2,
    writeFile,
  ], (err, result) => cb(err, result));
};
// END */

// BEGIN
export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    waterfall([
      (callback) => fs.readFile(inputPath1, callback),
      (data1, callback) => fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
      (data1, data2, callback) => fs.writeFile(outputPath, `${data1}${data2}`, callback),
    ], cb);
  };
  // END