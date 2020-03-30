// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const findWhere = (books, search) => {
    const searchKeys = Object.keys(search);
    
    for (const book of books) {
      const hasAllKeys = searchKeys.every(item => book.hasOwnProperty(item) && book[item] === search[item]);
      if (hasAllKeys) {
        return book;
      }
    }
    return null;
  };
  
  export default findWhere;
  // END

 /*  // BEGIN
const findWhere = (data, where) => {
    const entries = Object.entries(where);
    for (const item of data) {
      let find = true;
      for (const [key, value] of entries) {
        if (item[key] !== value) {
          find = false;
        }
      }
      if (find) {
        return item;
      }
    }
  
    return null;
  };
  
  export default findWhere;
  // END */