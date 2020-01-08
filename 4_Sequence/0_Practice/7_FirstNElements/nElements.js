// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const take = (number, elements) => {
  if (isEmpty(elements) || number < 1) return l();
  return cons(head(elements), take(number - 1, tail(elements)));
};
// END

export default take;