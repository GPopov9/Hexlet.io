// BEGIN (write your solution here)
const lengthOfLastWord = (str) => {
    const newStr = str.trim();
    const words = newStr.split(' ');
    return words[words.length - 1].length;
  };
  
  export default lengthOfLastWord;
  // END
  