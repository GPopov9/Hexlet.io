// @ts-check

// BEGIN (write your solution here)
const getDifference = (array1, array2) => {
    const result = array1.filter((item) => !array2.includes(item));
    return result;
  };
  
  export default getDifference;
  // END
  