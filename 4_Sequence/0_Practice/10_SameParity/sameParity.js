// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const sameParity = (elements) => {
  if (isEmpty(elements)) return l();
  const headElement = head(elements);
  return filter((element) => Math.abs(headElement % 2) === Math.abs(element % 2), elements);
};
// END
export default sameParity;

// Tutor's solution

// BEGIN
const isEven = (num) => num % 2 === 0;

export default (list) => {
  if (isEmpty(list)) {
    return l();
  }

  const firstItem = head(list);
  const firstItemParity = isEven(firstItem);

  return filter((value) => isEven(value) === firstItemParity, list);
};
// END