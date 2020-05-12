// BEGIN (write your solution here)
const findFilesByName = (tree, str) => {
    const iter = (node, pathAcc) => {
      const name = getName(node);
      if (isFile(node)) {
        return name.includes(str) ? pathAcc : [];
      }
      
      const children = getChildren(node);
  
      const filesByName = children.map((child) => {
        const name = getName(child);
        return iter(child, pathAcc + '/' + name);
      });
      console.log(pathAcc);
      return filesByName.flat();
    };
    
    return iter(tree, '');
  };
  
  export default findFilesByName;
  // END
  
  // BEGIN
const findFilesByName = (tree, substr) => {
    const iter = (node, ancestry) => {
      const name = getName(node);
      const newAncestry = path.join(ancestry, name);
      if (isFile(node)) {
        return name.includes(substr) ? [newAncestry] : [];
      }
      const children = getChildren(node);
      return children.map((child) => iter(child, newAncestry)).flat();
    };
  
    return iter(tree, '');
  };
  
  export default findFilesByName;