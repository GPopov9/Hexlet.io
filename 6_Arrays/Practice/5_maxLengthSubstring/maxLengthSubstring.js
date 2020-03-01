// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getLongestLength = (str) => {
    let maxLength = 0;
    let currentStr = '';
    let char;
    let position;
  
    for (let i = 0; i < str.length; i += 1) {
      char = str.charAt(i);
      position = currentStr.indexOf(str[i]);
      if (position !== -1) {
        currentStr = currentStr.substr(position + 1);
      }
      currentStr += char;
      maxLength = Math.max(maxLength, currentStr.length);
    }
  
    return maxLength;
  };
  
  export default getLongestLength;
  // END

/*   // BEGIN
const getLongestLength = (str) => {
    let sequence = [];
    let maxLength = 0;
  
    for (const char of str) {
      const index = sequence.indexOf(char);
      sequence.push(char);
      if (index !== -1) {
        sequence = sequence.slice(index + 1);
      }
      const sequenceLength = sequence.length;
      if (sequenceLength > maxLength) {
        maxLength = sequenceLength;
      }
    }
  
    return maxLength;
  };
  
  export default getLongestLength;
  // END */