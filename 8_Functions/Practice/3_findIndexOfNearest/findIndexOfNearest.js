// @ts-check
// BEGIN (write your solution here)

const findIndexOfNearest = (items, num) => {
    if (Array.isArray(items) && items.length) {
      const modules = items.map((item) => Math.abs(item - num));
      const result = modules.indexOf(Math.min(...modules));
      return result;
    }
    return null;
  };
  
  export default findIndexOfNearest;
  // END

/*   // BEGIN Tutor
export default (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));

  return diffs.reduce((index, diff, currentIndex) => (
    diff < diffs[index] ? currentIndex : index
  ), 0);
};
// END */