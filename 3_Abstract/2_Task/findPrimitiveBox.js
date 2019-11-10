import { car, cdr, isPair, toString } from '@hexlet/pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const findPrimitiveBox = (pair) => {
  if (!(isPair(car(pair))) && !(isPair(cdr(pair)))) {
    return pair;
  } else if (isPair(car(pair))) {
    return findPrimitiveBox(car(pair));
  } else if (isPair(cdr(pair))) {
    return findPrimitiveBox(cdr(pair));
  }
};
// END

export default findPrimitiveBox;
