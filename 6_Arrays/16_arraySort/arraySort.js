/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const bubbleSort = (arr) => {
    let size = arr.length;
    let swapped;
  
    do {
      swapped = false;
      const stepsCount = size - 1;
      for (let i = 0; i < stepsCount; i += 1) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      size -= 1;
    } while (swapped);
  
    return arr;
  };
  
  export default bubbleSort;
  // END