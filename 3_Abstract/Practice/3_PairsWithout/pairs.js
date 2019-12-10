// BEGIN (write your solution here)
export const cons = (x, y) => {
  const num = (2 ** x) * (3 ** y);
  return num;
};

export const car = (pair) => {
  let two = 0;
  let result = pair;

  do {
    if (result % 2 === 0) {
      result /= 2;
      two += 1;
    } else if (result % 3 === 0) {
      result /= 3;
    }
  } while (result > 2);

  return two;
};

export const cdr = (pair) => {
  let three = 0;
  let result = pair;

  do {
    if (result % 2 === 0) {
      result /= 2;
    } else if (result % 3 === 0) {
      result /= 3;
      three += 1;
    }
  } while (result >= 2);

  return three;
};
// END
