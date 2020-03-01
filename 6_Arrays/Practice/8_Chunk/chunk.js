// BEGIN (write your solution here)
const chunkFunction = (arr, chunk) => {
    let result = []; 
    let i = 0;
    let j = 0;
    while (i < arr.length) {
      result[j] = arr.slice(i, i + chunk);
      j += 1;
      i += chunk;
    }
    console.log(result);
    return result;
  };
  
  export default chunkFunction;
  // END
  // BEGIN
  export default (arr, size) => {
    const nArr = [];
    for (let i = 0; i < arr.length; i += size) {
      nArr.push(arr.slice(i, i + size));
    }
    return nArr;
  };
  // END