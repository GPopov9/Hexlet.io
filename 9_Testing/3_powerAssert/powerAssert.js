/* // @ts-check

const assert = require('power-assert');
const getFunction = require('../functions');

const indexOf = getFunction();

// BEGIN (write your solution here)
assert(indexOf([1, 2, 3], 2, 1) === 1);
assert(indexOf([1, 2, 3]) === -1);
assert(indexOf([1, 2, 3, 4], 3) === 2);
assert(indexOf([1, 2, 3, 4], 2) === 1);
assert(indexOf([1, 2, 3], 1) === 0);
assert(indexOf([1, 2, 3, 2], 2, 2) === 3);




// END */

// BEGIN Tutor
assert(indexOf(['one', 'two', 8], 'two') === 1);
assert(indexOf([1, 8, 9, 3, 9], 9) === 2);
assert(indexOf([1, 8, 9, 3, 9], 9, 3) === 4);
assert(indexOf([], 9) === -1);
// END