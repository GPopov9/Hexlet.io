// @ts-check

import { uniq } from 'lodash';

// BEGIN (write your solution here)
const union = (...arrays) => {
  let concatArray = [];
  for (let array of arrays) {
    concatArray = concatArray.concat(array);
  }
  const unique = uniq(concatArray);
  return unique;
};

export default union;
// END

/* // BEGIN Tutor
export default (first, ...rest) => {
    const concated = first.concat(...rest);
    return uniq(concated);
  }; */
  // END