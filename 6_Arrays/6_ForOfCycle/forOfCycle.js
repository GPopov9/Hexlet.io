/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default (temperatures) => {
    let sum = 0; 
    const result = 0; 
    const itemsCount = temperatures.length; 
    if (itemsCount === 0) return null;
  
    for (const item of temperatures) {
      sum += item; 
    }
    return sum / itemsCount;
  };
  // END
  