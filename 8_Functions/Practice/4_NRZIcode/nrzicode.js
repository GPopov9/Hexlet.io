// @ts-check
// BEGIN (write your solution here)
const nrziFunc = (string) => {
    let resultString = '';
    
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === '|' && string[i + 1] === undefined) return '';
      if (string[i] === '|') {
        resultString += '1';
        i += 1;
      } else resultString += 0;
    }
    return resultString;
  };
  
  export default nrziFunc;
  // END
  
/* 
  export default (str) => str
  .split('')
  .map((e, i, arr) => {
    if (e === '|') return '';
    return arr[i - 1] === '|' ? 1 : 0;
  })
  .join(''); */
// END

  