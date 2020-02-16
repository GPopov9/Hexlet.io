/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const isEven = (num) => Math.abs(num) % 2 === 0;

const getSameParity = (coll) => {
  const result = [];
  const parity = isEven(coll[0]);

  for (const item of coll) {
    if (isEven(item) === parity) result.push(item);
  }
  return result; 
};

export default getSameParity;
// END

// Tutor
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

export default getSameParity;