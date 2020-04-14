/* // @ts-check

const { isNumber } = require('lodash');
const getImplementation = require('../implementations');

const makeValidator = getImplementation(); */

// BEGIN (write your solution here)

/* test('validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('value')).toBe(true);

  validator.addCheck(isNumber);
  validator.addCheck((v) => v > 10);
  validator.addCheck((v) => v % 2 === 0);

  expect(validator.isValid(false)).toBe(false);
  expect(validator.isValid('string')).toBe(false);
  expect(validator.isValid(8)).toBe(false);
  expect(validator.isValid(11)).toBe(false);

  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(100)).toBe(true);
});

// END */
