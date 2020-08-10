/* // @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)

export default (tags) => {
  const tagsByEnv = {
    a: 'href',
    link: 'href',
    img: 'src',
  };

  return tags.map((tag) => tag[tagsByEnv[tag.name]] || null)
    .filter((tag) => tag !== null);
};
// END
 */

// BEGIN - Tutor
const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = (tags) => {
  const filteredTags = tags.filter((tag) => _.has(mapping, tag.name));
  const paths = filteredTags.map((tag) => tag[mapping[tag.name]]);

  return paths;
};

export default getLinks;
// END