const assert = require('assert');
const getFunction = require('../functions');

const take = getFunction();

// BEGIN (write your solution here)
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([], 2), []); // []
assert.deepEqual(take([4, 3], 9), [4, 3]); // [4, 3]
assert.deepEqual(take([1, 2, 3]), [1]);
// END

// BEGIN Tutor
assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepEqual(take([1, 2]), [1]);
assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepEqual(take(['one', 'two', 'three'], 0), []);
assert.deepEqual(take([]), []);
// END