/* // @ts-check

const getFunction = require('../functions');

const gt = getFunction();

// BEGIN (write your solution here)
test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBeFalsy();
    
});
// END */

// BEGIN
test('gt', () => {
    expect(gt(0, 0)).toBe(false);
    expect(gt(1, 0)).toBe(true);
    expect(gt(1, -3)).toBe(true);
  });
  // END