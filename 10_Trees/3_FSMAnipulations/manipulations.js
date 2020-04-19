/* /* eslint-disable import/prefer-default-export */
// @ts-check

/* import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees'; */
 
/* // BEGIN (write your solution here)
const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    if (isFile(child)) {
      const name = getName(child);
      const newMeta = _.cloneDeep(getMeta(child));
      newMeta.size = newMeta.size / 2;
      return mkfile(name, newMeta);
    }
    return mkdir(getName(child), getChildren(child), _.cloneDeep(getMeta(child)));
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  const newDir = mkdir(getName(tree), newChildren, newMeta);
  return newDir;
};

export { compressImages };
// END */


// TUTOR

/* export const compressImages = (node) => {
    const children = getChildren(node);
    const newChildren = children.map((child) => {
      const name = getName(child);
      if (!isFile(child) || !name.endsWith('.jpg')) {
        return child;
      }
      const meta = getMeta(child);
      const newMeta = _.cloneDeep(meta);
      newMeta.size /= 2;
      return mkfile(name, newMeta);
    });
    const newMeta = _.cloneDeep(getMeta(node));
    return mkdir(getName(node), newChildren, newMeta);
  };
  // END */