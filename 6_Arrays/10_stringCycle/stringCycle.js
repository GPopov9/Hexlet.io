/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) return '';
    const definitionList = [];
    for (const item of definitions) {
      definitionList.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
    }
    const innerValue = definitionList.join('');
    const result = `<dl>${innerValue}</dl>`;
  
    return result;
  };
  
  export default buildDefinitionList;
  // END