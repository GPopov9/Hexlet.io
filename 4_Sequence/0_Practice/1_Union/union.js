// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString, concat } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
export default (list1, list2) => {
  const func = (element, acc) => !has(acc, element) ? cons(element, acc) : acc;
  const newList = reduce(func, l(), list1);
  const finalList = reduce(func, newList, list2);

  return reverse(finalList);
};
// END

// BEGIN (tutor's solution)
export default (list1, list2) => {
    const result = reduce(
      (value, acc) => (has(acc, value) ? acc : cons(value, acc)),
      l(),
      concat(list1, list2),
    );
  
    return reverse(result);
  };
  // END