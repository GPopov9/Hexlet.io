// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

// BEGIN (write your solution here)
export const make = (x,y) => cons(x,y);
export const numer = (pair) => car(pair);
export const denom = (pair) => cdr(pair);
export const toString = (pair) => {
  let result = (`${car(pair)} / ${cdr(pair)}`);
  return result; 
};
export const isEqual = (pair1, pair2) => {
  if (car(pair1) === car(pair2) && cdr(pair1) === cdr(pair2)) {
    return true; 
  }
  return false;
};

export const add = (pair1, pair2) => {
  let numer = (`${car(pair1) * cdr(pair2) + cdr(pair1) * car(pair2)}`); 
  let denom = (`${cdr(pair1)*cdr(pair2)}`);
  return cons(numer, denom);
};

export const sub = (pair1, pair2) => {
  let numer = (`${car(pair1) * cdr(pair2) - cdr(pair1) * car(pair2)}`);
  let denom = (`${cdr(pair1)*cdr(pair2)}`);
  return cons(numer,denom);  
};

export const mul = (pair1, pair2) => {
  let numer = (`${car(pair1)*car(pair2)}`);
  let denom =(`${cdr(pair1)*cdr(pair2)}`);
  return cons(numer, denom);
};

export const div = (pair1, pair2) => {
  let numer = (`${car(pair1)*cdr(pair2)}`);
  let denom =(`${cdr(pair1)*car(pair2)}`);
  return cons(numer, denom);
};


// END
