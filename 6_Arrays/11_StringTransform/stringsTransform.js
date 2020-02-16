/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const makeCensored = (sentence, stopWords) => {
    const separator = ' ';
    const words = sentence.split(separator);
    const censoredSentence = [];
  
    for (const word of words) {
      let status = true;
      for (const stopWord of stopWords) {
        if (word === stopWord) {
          status = false;
          break;
        }
      }
      status ? censoredSentence.push(word) : censoredSentence.push('$#%!');
    }
    return censoredSentence.join(separator);
  };
  
  export default makeCensored;
  // END

  // BEGIN Tutor
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
  
    const result = [];
    for (const word of words) {
      const newWord = stopWords.includes(word) ? '$#%!' : word;
      result.push(newWord);
    }
  
    return result.join(' ');
  };
  
  export default makeCensored;
  // END