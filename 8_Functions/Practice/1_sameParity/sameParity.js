// @ts-check
// BEGIN (write your solution here)

const isEven = (num) => num % 2 === 0;

const sameParity = (items) => {
  const firstItem = isEven(items[0]);

  return items.filter((item) => isEven(item) === firstItem);
};

export default sameParity;
// END