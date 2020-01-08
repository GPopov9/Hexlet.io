import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (list1, list2) => {
  const iter = (elements1, elements2, result) => {
    if (isEmpty(elements1) || isEmpty(elements2)) return result;
    const headElements1 = head(elements1);
    const headElements2 = head(elements2);
    const tailElements1 = tail(elements1);
    const tailElements2 = tail(elements2);

    const newResult = cons(l(headElements1, headElements2), result);

    return iter(tailElements1, tailElements2, newResult);
  };
  return reverse(iter(list1, list2, l()));
};
// END
export default zip;

// Tutor's 
// BEGIN
const zip = (list1, list2) => {
    if (isEmpty(list1) || isEmpty(list2)) {
      return l();
    }
  
    const current = l(head(list1), head(list2));
    return cons(current, zip(tail(list1), tail(list2)));
  };
  
  export default zip;