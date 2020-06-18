// @ts-check
/* eslint-disable import/prefer-default-export */
//import fs from 'fs';

// BEGIN (write your solution here)
/* const move = (file1, file2, cb) => {
  fs.readFile(file1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(file2, data1, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(file1, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null);
      });
    });
  });
};

export { move }; */
// END