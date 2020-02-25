const isContinuousSequence = (arr) => {
    if (arr.length < 2) return false;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i + 1] !== arr[i] + 1) return false;
    }
    return true;
  };
  
  export default isContinuousSequence;
  // END
  