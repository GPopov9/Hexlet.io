import { cons, car, cdr, toString } from '@hexlet/pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const reversePair = (pair) => {
  let newPair = cons(cdr(pair),car(pair));
  return newPair;
}
// END
export default reversePair;