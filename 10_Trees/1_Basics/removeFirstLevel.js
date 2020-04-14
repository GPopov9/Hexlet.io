// @ts-check

// BEGIN (write your solution here)
const removeFirstLevel = (items) => {
    const result = (items.filter((item) => Array.isArray(item))).flat();
    return result;
  };
  
  export default removeFirstLevel;
  // END
  
 /*  // BEGIN Tutor
export default (tree) => {
  const nodes = tree.filter(Array.isArray);
  return nodes.flat();
};
// END */