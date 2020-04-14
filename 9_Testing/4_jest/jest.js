/* // @ts-check

const getFunction = require('../functions');

const without = getFunction();

// BEGIN (write your solution here)
test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([], 1, 2)).toEqual([]);

});
// END */


// Tutor
test('without', () => {
    expect(without([], 3)).toEqual([]);
    expect(without([3, 8, 9, 8, 10], 8, 10)).toEqual([3, 9]);
  });
  // END