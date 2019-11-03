import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
    let count = 0;
    for (let i = 0; i < length(str); i++) {
      if (toUpperCase(str[i]) === str[i] || toUpperCase(str[i]) ===" ") {
        count += 1;
      } 
    }

    return count;
    // END
};

// console.log(bigLettersCount('ADdsadsad DDD'));


const compare = (first, second) => {
const firstCount = bigLettersCount(first);
const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } return 0;
  // END
};



export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);