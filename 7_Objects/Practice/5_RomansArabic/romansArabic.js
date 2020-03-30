// @ts-check
/* eslint no-restricted-syntax: [off, ForOfStatement] */
// BEGIN (write your solution here)
const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  
  const toRoman = (num) => {
    let romanNum = '';
  
    for (let key of Object.keys(roman)) {
      const q = Math.floor(num / roman[key]);
      num -= q * roman[key];
      romanNum += key.repeat(q);
    }
  
    return romanNum;
  };
  
  const toArabic = (num) => {
    let arabic = 0;
    for (let i = 0; i < num.length; i += 1) {
      const char = num[i];
      const char1 = num[i] + num[i + 1];
  
      if (roman.hasOwnProperty(char1)) {
        arabic += roman[char1];
        i += 1;
      } else arabic += roman[char];
    }
    return arabic;
  };
  
  export { toRoman, toArabic };
  // END

/*   // BEGIN tutor
const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  
  export const toRoman = (number) => {
    let digit = number;
    let result = '';
    for (const [roman, arabic] of Object.entries(numerals)) {
      const repetitionsCount = Math.floor(digit / arabic);
      digit -= repetitionsCount * arabic;
      result = `${result}${roman.repeat(repetitionsCount)}`;
    }
  
    return result;
  };
  
  
  export const toArabic = (romanNumber) => {
    let result = 0;
    let currentLine = romanNumber;
    for (const [roman, arabic] of Object.entries(numerals)) {
      while (currentLine.indexOf(roman) === 0) {
        result += arabic;
        currentLine = currentLine.slice(roman.length);
      }
    }
    return result;
  }; */