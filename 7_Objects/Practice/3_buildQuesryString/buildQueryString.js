// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const buildQueryString = (query) => {
    let result = '';
    const keys = Object.keys(query).sort();
  
    for (let i = 0; i < keys.length; i += 1) {
      const k = keys[i];
      result += `${k}=${query[k]}&`;
    }
    result = result.substring(0, result.length - 1);
    return result;
  };
  
  export default buildQueryString;
  // END