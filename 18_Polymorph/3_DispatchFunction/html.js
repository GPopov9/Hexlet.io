// @ts-check

// BEGIN (write your solution here)

const getAttributes = (tag) => {
  const toExclude = ['name', 'tagType', 'body'];
  const keys = Object.keys(tag);
  return keys.filter((key) => !toExclude.includes(key))
    .map((key) => ` ${key}="${tag[key]}"`).join('');
};

export default (tag) => {

  const mapping = {
  single: (tag) => {
    const attributes = getAttributes(tag);
    return `<${tag.name}${attributes}>`;
  },
  pair: (tag) => {
    const attributes = getAttributes(tag);
    return `<${tag.name}${attributes}>${tag.body}</${tag.name}>`;
  },
};
  const build = mapping[tag.tagType];
  return build(tag);
};
// END