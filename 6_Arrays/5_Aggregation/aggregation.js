/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 3 === 0) sum += arr[i];
    }
    return sum;
  };  
  // END