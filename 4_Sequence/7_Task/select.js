import { /* eslint-disable */
    l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
  } from '@hexlet/pairs-data';
  
  import {
    is, hasChildren, children, filter, reduce, toString as htmlToString,
  } from '@hexlet/html-tags'; /* eslint-enable */
  
  // BEGIN (write your solution here)
  const select = (tagName, elements) => {
    const func = (element, acc) => {
      const acc1 = (hasChildren(element)) ? concat(select(tagName, children(element)), acc) : acc;
      return is(tagName, element) ? consList(element, acc1) : acc1;
    };
    return reduce(func, l(), elements);
  };
  
  export default select;