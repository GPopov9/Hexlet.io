const flatten = (arr) => {
    const result = arr.reduce((acc, item) => acc.concat(!(Array.isArray(item)) ? item : flatten(item)), []);
    return result;
  };
  
  export default flatten;