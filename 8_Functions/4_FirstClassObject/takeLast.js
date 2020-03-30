// @ts-check

const run = (text) => {
    // BEGIN (write your solution here)
    const takeLast = (text, num) => {
      const textLength = text.length;
      let result = '';
      if (textLength < num) return null;
      for (let i = textLength - 1; i >= textLength - num; i -= 1) {
        const char = text[i];
        result += `${char}`;
      }
      return result;
    }
    // END
  
    return takeLast(text, 4);
  };
  
  export default run;

 /*    // BEGIN
    const takeLast = (str, length) => {
        if (str.length < length) {
          return null;
        }
    
        const result = [];
        for (let i = str.length - 1; result.length < length; i -= 1) {
          result.push(str[i]);
        }
    
        return result.join('');
      };
      // END */