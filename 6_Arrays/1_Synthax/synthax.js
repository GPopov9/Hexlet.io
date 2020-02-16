/* eslint-disable no-param-reassign */

const apply = (arr, operationName, index, value) => {
    // BEGIN (write your solution here)
    
  
    switch (operationName) {
      case 'reset': return arr = [];
      case 'get': return arr[index];
      case 'change': {
        arr[index] = value;
        return arr;
      }
      default: return arr;   
    }
        
  
    
    // END
  };
  
  export default apply;