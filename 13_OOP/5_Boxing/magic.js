// @ts-check
// BEGIN (write your solution here)
const magic = (...rest) => { 
    const sum = rest.reduce((acc, el) => el + acc, 0); //= rest;
    const acc = (...rest) => magic(sum, ...rest);
    acc.valueOf = () => sum; 
    return acc;
  };
  
  export default magic;
  
  
  // END
  