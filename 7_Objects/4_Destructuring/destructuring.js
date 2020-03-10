// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const getSortedNames = (users) => {
    const names = [];
  
    for (const user in users) {
      names.push(users[user]['name']);
    }
    console.log(names);
    
    return names.sort();
  
  };
  
  export default getSortedNames;
  // END

/*   // BEGIN
export default (users) => {
    const names = [];
  
    for (const { name } of users) {
      names.push(name);
    }
  
    return names.sort();
  };
  // END */