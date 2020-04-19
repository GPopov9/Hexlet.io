// @ts-check

/* import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';
  import _ from 'lodash'; */
  
  /*  BEGIN (write your solution here)
  const downcaseFileNames = (tree) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
  
    if (isFile(tree)) {
      return mkfile(name.toLowerCase(), newMeta);
    }
  
    const children = getChildren(tree);
    const newChildren = children.map((child) => downcaseFileNames(child));
    const newTree = mkdir(name, newChildren, newMeta);
    return newTree;
  };
  
  export default downcaseFileNames;
  // END */



  /* Tutor 
  // BEGIN
const downcaseFileNames = (node) => {
    const newMeta = _.cloneDeep(getMeta(node));
    const name = getName(node);
    if (isFile(node)) {
      return mkfile(name.toLowerCase(), newMeta);
    }
    const children = getChildren(node);
    const newChildren = children.map(downcaseFileNames);
    return mkdir(name, newChildren, newMeta);
  };
  
  export default downcaseFileNames;
  // END */
