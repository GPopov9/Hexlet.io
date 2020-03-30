// @ts-check

import { sum } from 'lodash';

// BEGIN (write your solution here)
const average = (...numbers) => {
  const length = numbers.length;
  if (length < 1) return null;

  const result = sum(numbers) / length;

  return result;
};

export default average;
// END