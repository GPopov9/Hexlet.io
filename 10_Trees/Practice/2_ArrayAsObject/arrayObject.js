// @ts-check
// BEGIN (write your solution here)


const convert = (arr) => {
    const result = arr.reduce((acc, [key, value]) => {
      (!Array.isArray(value)) ? acc[key] = value : acc[key] = convert(value);
        return acc;
      }, {});
    return result;
  };
  
  export default convert;
  // END

 /*  // BEGIN Tutor
const convert = (arr) => arr.reduce((acc, item) => {
    const [key, value] = item;
    const newValue = Array.isArray(value) ? convert(value) : value;
    return { ...acc, [key]: newValue };
  }, {});
  
  export default convert;
  // END */