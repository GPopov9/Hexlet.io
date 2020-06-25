// @ts-check


// BEGIN
const search = (doc, tag) => {
    const coll = [...doc.children];
    const initAcc = coll.filter((e) => e.tagName === tag.toUpperCase());
    return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
  };
  
  export default search;
  // END