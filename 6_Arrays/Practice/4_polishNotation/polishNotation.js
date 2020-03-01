// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)
const polishNotation = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof (arr[i]) === 'number') {
        result.push(arr[i]);
      } else {
        const x = result.pop();
        const y = result.pop();
        switch (arr[i]) {
          case '+': {
            result.push(x + y);
            break;
          }
          case '-': {
            result.push(y - x);
            break;
          }
          case '*': {
            result.push(x * y);
            break;
          }
        }
      }
    }
    return result.pop();
  };
  
  export default polishNotation;
  // END

 /*  // BEGIN Tutor
const calcInPolishNotation = (array) => {
    const stack = [];
    const operators = ['*', '/', '+', '-'];
  
    for (const value of array) {
      if (!operators.includes(value)) {
        stack.push(value);
        continue;
      }
  
      const b = stack.pop();
      const a = stack.pop();
      let result;
  
      switch (value) {
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        default:
          break;
      }
  
      stack.push(result);
    }
  
    return stack.pop();
  };
  
  export default calcInPolishNotation;
  // END */