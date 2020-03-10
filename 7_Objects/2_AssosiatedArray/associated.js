// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"], no-prototype-builtins: "off" */
// BEGIN (write your solution here)
const getIn = (data, keys) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (!data || !data.hasOwnProperty(keys[i])) {
        return null;
      }
      data = data[keys[i]];
      }
    return data; 
  };
  
  export default getIn;
  // END

/*   // BEGIN tutor
const getIn = (data, keys) => {
    let current = data;
    for (const key of keys) {
      if (!current.hasOwnProperty(key)) {
        return null;
      }
      current = current[key];
    }
  
    return current;
  };
  
  export default getIn;
  // END */