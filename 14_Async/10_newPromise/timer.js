// @ts-check
// BEGIN (write your solution here)
const wait = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  
  export default wait;
  // END