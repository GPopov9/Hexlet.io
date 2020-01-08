// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) return l();
  const headList = head(list);
  const tailList = tail(list);
  const before = filter((item) => item <= headList, tailList);
  const after = filter((item) => item > headList, tailList);
  const result = concat(sort(before), cons(headList, sort(after)));

  return result;
};
export default sort;
// END
