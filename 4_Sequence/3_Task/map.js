import {
    l, isEmpty, head, tail, cons, reverse,
  } from '@hexlet/pairs-data';
  
  import {
    getName, getValue, node, is,
  } from '@hexlet/html-tags';
  
  import { reverse as reverseStr } from './strings';
  
  // BEGIN (write your solution here)
  export const map = (func, elements) => {
    if (isEmpty(elements)) {
      return l();  
    }
    return cons(func(head(elements)), map(func, tail(elements)));
  };
  
  export const mirror = (elements) => map(element => node(getName(element), reverseStr(getValue(element))), elements);
  
  // END
  
  export const b2p = (elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    let newElement;
    const element = head(elements);
    if (is('blockquote', element)) {
      newElement = node('p', getValue(element));
    } else {
      newElement = element;
    }
  
    return cons(newElement, b2p(tail(elements)));
  };
  