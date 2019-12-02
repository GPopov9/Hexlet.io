import length from './strings';

// BEGIN (write your solution here)
export const cons = (str1, str2) => {
  const result = (`${str1}\0${str2}`);
  return result;
}; 

export const car = (str) => {
  let i = 0;
  let result = '';
  while (str[i] !== '\0') {
    result += str[i];
    i += 1;
  }
  return result;
};

export const cdr = (str) => {
  let re = /\0/; 
  let result = '';
  let index = str.search(re) + 1;

  for (let i = index; i <str.length; i+=1) {
    result += str[i];
  }


  return result;
};
// END
