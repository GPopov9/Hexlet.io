/* // @ts-check

import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here) */
const hiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree) && name.slice(0, 1) === '.') {
    return 1;
  }
  const children = getChildren(tree);
  if (children !== undefined) {
    const hiddenCount = children.map((child) => hiddenFilesCount(child));
    return _.sum(hiddenCount);
  }
};

export default hiddenFilesCount;
// END

// BEGIN
const getHiddenFilesCount = (node) => {
    const name = getName(node);
    if (isFile(node)) {
      return name.startsWith('.') ? 1 : 0;
    }
  
    const children = getChildren(node);
    const hiddenFilesCounts = children.map(getHiddenFilesCount);
    return _.sum(hiddenFilesCounts);
  };
  
  export default getHiddenFilesCount;
  // END
