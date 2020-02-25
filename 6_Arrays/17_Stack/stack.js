/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)


const isBracketStructureBalanced = (expression) => {
  const stack = [];
  
  let indexClose
  


  for (const item of expression) {
    let indexOpen = openingSymbols.indexOf(item);
    let indexClose = closingSymbols.indexOf(item);
    if (indexOpen > -1) {
      stack.push(indexOpen);
      console.log(stack);
    } else if (indexClose > -1) {
        if (stack[stack.length - 1] === indexClose) {
          stack.pop();
        } else return false;
      }
  }

  return stack.length === 0;
  

};

export default isBracketStructureBalanced;
// END


// BEGIN Tutor's
const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// END

