// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const fromPairs = (arr) => {
    let resultObject = {};
    for (const key of arr) {
      resultObject[key[0]] = key[1];
    }
    return resultObject;
  }
  
  export default fromPairs;
  // END

  
  /* // BEGIN Tutor
const fromPairs = (data) => {
    const result = {};
  
    for (const [key, value] of data) {
      result[key] = value;
    }
  
    return result;
  };
  
  export default fromPairs;
  // END */