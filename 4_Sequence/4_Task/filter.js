import {
    l, isEmpty, head, tail, cons, reverse,
  } from '@hexlet/pairs-data';
  
  import { getValue, is, map } from '@hexlet/html-tags';
  
  // BEGIN (write your solution here)
  export const filter = (func, elements) => {
    const iter = (items, acc) => {
      if (isEmpty(items)) {
        return reverse(acc);
      }
      const item = head(items);
      const newAcc = func(item) ? cons(item, acc) : acc; 
      return iter(tail(items), newAcc);
    };
    return iter(elements, l());
  };
  
  export const quotes = (elements) => {
    const updatedList = filter(element => is('blockquote', element), elements);
    const result = map(getValue, updatedList);
    return result;
  };
  // END
  
  export const removeHeaders = (elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h1', element)) {
      return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
  };
  