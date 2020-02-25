/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import { uniq } from 'lodash';

// BEGIN (write your solution here)
const getSameCount = (coll1, coll2) => {
  const result = [];
  for (const item1 of coll1) {
    for (const item2 of coll2) {
      if (item1 === item2) result.push(item1);
    }
  }

  return uniq(result).length;
};

export default getSameCount;
// END

// BEGIN (Tutor)
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = uniq(coll1);
  const uniqColl2 = uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};

export default getSameCount;
// END