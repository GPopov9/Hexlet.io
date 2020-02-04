

// BEGIN (write your solution here) reversePair
import { cons, car, cdr, toString } from '@hexlet/pairs'; // eslint-disable-line

const reversePair = (pair) => cons(cdr(pair), car(pair));
export default reversePair;
// END



// BEGIN (write your solution here) sumOfPairs
import { cons, car, cdr, toString } from '@hexlet/pairs'; // eslint-disable-line

const sumOfPairs = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
export default sumOfPairs;
// END


// BEGIN (write your solution here) findPrimitiveBox
import { car, cdr, isPair, toString } from '@hexlet/pairs'; // eslint-disable-line

const findPrimitiveBox = (pair) => {
  if (isPair(car(pair))) return findPrimitiveBox(car(pair));
  if (isPair(cdr(pair))) return findPrimitiveBox(cdr(pair));
  return pair;
};
export default findPrimitiveBox;
// END



