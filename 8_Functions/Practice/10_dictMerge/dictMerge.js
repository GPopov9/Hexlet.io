// @ts-check
import _ from 'lodash';

// BEGIN (write your solution here)
const dict = (...dictionaries) => _.mergeWith({}, ...dictionaries, (objValue, srcValue) => _.uniq((objValue || []).concat(srcValue)));

export default dict;
// END

/* // BEGIN Tutor
const cons = (array, el) => _.union(array, [el]);

const merge = (result, dictionary) => _.mergeWith(result, dictionary, cons);

export default (...dictionaries) => dictionaries.reduce(merge, {});
// END */