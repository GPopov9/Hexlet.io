const hammingWeight = (num) => {
    const newNum = num.toString(2);
    return newNum.split('1').length - 1;
  };
  
  export default hammingWeight;
  // END
  