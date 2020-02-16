// BEGIN (write your solution here)
export default (arr, prefix) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      newArr[i] = `${prefix} ${arr[i]}`;
    }
    return newArr;
  };
  // END