// @ts-check
// BEGIN (write your solution here)
const enlargeArrayImage = (items) => {
    const subItems = items.map((item) => (item.map((subItem) => [subItem, subItem])).flat());
    const subItemsResult = (subItems.map((item) => [item, item]).flat());
    return subItemsResult;
  };
  
  export default enlargeArrayImage;
  // END

/*   // BEGIN Tutor
const duplicateValues = (items) => items.map((item) => [item, item]).flat();

const enlargeArrayImage = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};

export default enlargeArrayImage;
// END */