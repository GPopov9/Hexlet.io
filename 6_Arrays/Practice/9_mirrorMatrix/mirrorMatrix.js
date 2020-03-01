// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getMirrorMatrix = (arr) => {
    let result = [];
    const length = arr.length;
  
    for (let i = 0; i < length; i += 1) {
      result[i] = [];
        for (let j = 0; j < length / 2 ; j += 1) {
          result[i][j] = arr[i][j];
          result[i][length - j - 1] = arr[i][j];
        }
        
    }
  
  
    
    console.log(result);
    console.log(arr.length);
    return result;
  };
  
  export default getMirrorMatrix;
  // END
  
  /* // BEGIN
  const getMirrorArray = (array) => {
    const size = array.length;
    const mirrored = [];
  
    for (let i = 0; i < size / 2; i += 1) {
      mirrored[i] = array[i];
      mirrored[size - i - 1] = array[i];
    }
  
    return mirrored;
  };
  
  const getMirrorMatrix = (matrix) => {
    const mirroredMatrix = [];
  
    for (const row of matrix) {
      const mirroredRow = getMirrorArray(row);
      mirroredMatrix.push(mirroredRow);
    }
  
    return mirroredMatrix;
  };
  
  export default getMirrorMatrix;
  // END */