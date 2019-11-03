 import { length } from './strings';


// BEGIN (write your solution here)

const addDigits = (num) => {
    
  let sum = num + '';

  while (length(sum) > 1) {
      let count = 0;
      for (let i = 0; i < sum.length; i++) {
        count = count + (+sum[i]);
      }
    
    sum = count + '';
  }
          
  return +sum;

    
};

console.log(addDigits(0));

// END

