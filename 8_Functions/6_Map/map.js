// @ts-check

// BEGIN (write your solution here)
const getChldren = (users) => {
    const result = users.map(({ children }) => children);
    return result.flat(); 
  };
  
  export default getChldren;
  // END