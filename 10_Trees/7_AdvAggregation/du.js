// BEGIN (write your solution here)
const getFilesSize = (tree) => {
  if (isFile(tree)) {
    const newMeta = _.cloneDeep(getMeta(tree));
    return newMeta.size;
  }

  const children = getChildren(tree);
  const filesSize = children.map(getFilesSize);
  return _.sum(filesSize);
};

const getDirectorySize = (tree) => {
  const children = getChildren(tree);
  const result = children
    .map((child) => [getName(child), getFilesSize(child)]);
   
  return result.sort((a,b) => b[1] - a[1]);
};
export default getDirectorySize;
// END

// BEGIN Tutor
const calculatefilesSize = (tree) => {
    if (isFile(tree)) {
      const meta = getMeta(tree);
      return meta.size;
    }
  
    const children = getChildren(tree);
    const sizes = children.map(calculatefilesSize);
    return _.sum(sizes);
  };
  
  const du = (tree) => {
    const children = getChildren(tree);
    const result = children.map((child) => [getName(child), calculatefilesSize(child)]);
    // Destructuring
    result.sort(([, size1], [, size2]) => size2 - size1);
    return result;
  };
  
  export default du;
  // END