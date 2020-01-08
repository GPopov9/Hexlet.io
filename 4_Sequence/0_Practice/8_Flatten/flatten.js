import { l, reverse, isEmpty, toString as listToString, isList, cons, reduce, concat } from '@hexlet/pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export default (list) => {
  if (isEmpty(list)) return l(); 
  const func = (item, acc) => !isList(item) ? cons(item, acc) : reduce(func, acc, item);
  return reverse(reduce(func, l(), list));
};
// END

// BEGIN Tutor's
const flatten = list => (
    reduce(
      (element, acc) => (
        isList(element) ? concat(flatten(element), acc) : cons(element, acc)
      ),
      l(),
      reverse(list),
    )
  );
  
  export default flatten;
  // END