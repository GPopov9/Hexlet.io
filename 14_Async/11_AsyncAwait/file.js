// @ts-check
/* eslint-disable import/prefer-default-export */
/* import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const exchange = async (filepath1, filepath2) => {
  try {
    const data1 = await fs.readFile(filepath1, 'utf-8'); 
    const data2 = await fs.readFile(filepath2, 'utf-8'); 
    await fs.writeFile(filepath1, data2);
    await fs.writeFile(filepath2, data1);
  } catch (err) {
    throw err;
  }
  
}; */
// END

// BEGIN (Tutor)
/* export const exchange = async (filepath1, filepath2) => {
    const reading1 = fs.readFile(filepath1);
    const reading2 = fs.readFile(filepath2);
    const [data1, data2] = await Promise.all([reading1, reading2]);
    const writing1 = fs.writeFile(filepath1, data2);
    const writing2 = fs.writeFile(filepath2, data1);
    await Promise.all([writing1, writing2]);
  };
  // END */
