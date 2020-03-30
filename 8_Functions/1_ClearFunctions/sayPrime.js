// @ts-check
/* eslint-disable no-console */
// BEGIN (write your solution here)
const isPrime = (number) => {
    if (number < 2) return false;
    for (let divisor = 2; divisor <= number / 2; divisor += 1) {
      if (number % divisor === 0) return false;
    }
    return true;
  };
  
  const sayPrimeOrNot = (number) => {
    const message = (isPrime(number)) ? 'yes' : 'no';
    console.log(message);
  };
  
  export default sayPrimeOrNot;
  // END