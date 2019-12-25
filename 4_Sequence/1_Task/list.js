// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)

export const has = (numbers, num) => {
  if (isEmpty(numbers)) return false;  
  else if (num === head(numbers)) return true;
  else {
    return has(tail(numbers), num);
  }
}; 



export const reverse = (numbers) => {
  let acc = l();
  const iter = (items) => {
    if (isEmpty(items)) {
    return acc;
  } else {
    acc = cons(head(items), acc);
    return iter(tail(items));
  }
  };
  
  return iter(numbers);
};

export const concat = (numbers, numbers2) => {
 if (isEmpty(numbers)) return numbers2;
 return cons(head(numbers), concat(tail(numbers), numbers2));
};
// END
