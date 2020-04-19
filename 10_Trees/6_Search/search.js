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
  