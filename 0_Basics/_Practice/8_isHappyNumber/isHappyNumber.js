const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
    return sum;
  };
  
  // BEGIN (write your solution here)
const isHappyNumber = (num) => {
    let i = 0;
    let newNum = num;
    while (i <= 10) {
        if (sumOfSquareDigits(newNum) == 1) {
            return true;
        } else {            
            newNum = sumOfSquareDigits(newNum);
            console.log(newNum);
            i += 1;
        }
    }
    return false;
};

console.log(isHappyNumber(1));
  
  // END