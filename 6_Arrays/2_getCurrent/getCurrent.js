// BEGIN
const get = (arr, index, defaultValue = null) => {
    if (arr[index] === undefined) {
      return defaultValue;
    }
  
    return arr[index];
  };
  
  export default get;
  // END