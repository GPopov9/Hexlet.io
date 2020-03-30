// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import { get } from 'lodash';

// BEGIN (write your solution here)
const scrabble = (setSymbols, word) => {
  const setArray = setSymbols.split('');
  word = word.toLowerCase();

  for (const char in word) {
    const position = setArray.indexOf(word[char]);
    if (position === -1) {
      return false;
    } else {
      setArray.splice(position, 1);
    }
  }

  return true;
};

export default scrabble;
// END

/* // BEGIN Tutor
// Эту функцию можно заменить функцией countBy
// из библиотеки lodash https://lodash.com/docs/#countBy
const countByChars = (str) => {
    const chars = {};
  
    for (const char of str) {
      const count = get(chars, char, 0);
      chars[char] = count + 1;
    }
  
    return chars;
  };
  
  export default (str, word) => {
    const countsChars = countByChars(str);
  
    for (const char of word.toLowerCase()) {
      const count = get(countsChars, char, 0);
      if (count === 0) {
        return false;
      }
      countsChars[char] -= 1;
    }
  
    return true;
  };
  // END */