// BEGIN (write your solution here)

const uniqueSymbols = (word) => word
  .split('')
  .filter((char, i, arr) => arr.indexOf(char) === i)
  .sort()
  .join('');


const filterAnagrams = (word, items) => {
  const unique = uniqueSymbols(word);
  const result = items.filter((item) => uniqueSymbols(item) === unique);
  return result;
};

export default filterAnagrams;
// END

// BEGIN tutor
export default (word, words) => {
    const normalize = (str) => [...str].sort().join('');
    const normal = normalize(word);
  
    return words.filter((item) => normalize(item) === normal);
  };
  // END
