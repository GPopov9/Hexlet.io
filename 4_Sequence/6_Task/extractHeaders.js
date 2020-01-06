import {
    node, getValue, is, map, filter, reduce,
  } from '@hexlet/html-tags';
  
  import { wc } from './utils';
  
  // BEGIN (write your solution here)
  export const extractHeaders = (elements) => {
    const filtered = filter((element) => is('h2', element), elements);
    return map((element) => node('p', getValue(element)), filtered);
  };
  
  export const wordsCount = (tagName, word, elements) => {
    const filtered = filter((element) => is(tagName, element), elements);
    const words = map((element) => getValue(element), filtered);
    return reduce((text, acc) => wc(word, text) + acc, 0, words);
  };
  
  // END
  