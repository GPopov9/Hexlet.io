// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();
// BEGIN (write your solution here)

export const node = (tag, content) => cons(tag, content);

export const getName = (tag) => car(tag);

export const getValue = (tag) => cdr(tag);

export const append = (list, tag) => cons(tag, list);

export const toString = (list) => {
  let acc = '';
  const iter = (numbers) => {
    if (isEmpty(numbers)) return acc;
    acc = `<${car(head(numbers))}>${cdr(head(numbers))}</${car(head(numbers))}>${acc}`;
    return iter(tail(numbers));
  };
  return iter(list);
};
// END
