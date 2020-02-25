/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const countUniqChars = (string) => {
    const stringArr = string.split('');
    const result = stringArr.filter((item, i, ar) => ar.indexOf(item) === i);
    
    
    return result.length;
  };
  
  export default countUniqChars;
  // END
  
  // BEGIN Tutor
  const countUniqChars = (text) => {
    const uniqChars = [];
  
    for (const char of text) {
      if (!uniqChars.includes(char)) {
        uniqChars.push(char);
      }
    }
  
    return uniqChars.length;
  };
  
  export default countUniqChars;