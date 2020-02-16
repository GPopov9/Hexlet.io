// BEGIN (write your solution here)
export default (arr, index) => {
    if ((index - 1 < 0 ) || (index + 1 > arr.length - 1)) return arr; 
    let temp = arr[index - 1];
    arr[index - 1] = arr[index + 1];
    arr[index + 1] = temp; 
  
    return arr;   
  }; 
  // END
  
  // BEGIN - Tutor's solution
  const swap = (coll, center) => {
    const lastIndex = coll.length - 1;
    const isSwappable = (center > 0) && (center < lastIndex);
  
    if (!isSwappable) {
      return coll;
    }
  
    const prevIndex = center - 1;
    const nextIndex = center + 1;
  
    const temp = coll[prevIndex];
    coll[prevIndex] = coll[nextIndex];
    coll[nextIndex] = temp;
  
    return coll;
  };
  
  export default swap;
  // END