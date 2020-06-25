/* // @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { camelCase } from 'lodash';

// BEGIN (write your solution here)
const normalize = (doc) => {
  const coll = [...doc.body.getElementsByTagName('*')];
  coll.forEach((node) => {
    const classList = node.className.split(' ').map((el) => camelCase(el)).join(' ');
    node.setAttribute('class', classList);
  });
};

export default normalize;
// END */

// BEGIN
export default (doc) => {
    for (const element of doc.body.getElementsByTagName('*')) { // eslint-disable-line
      const process = (item) => element.classList.replace(item, camelCase(item));
      element.classList.forEach(process);
    }
  };
  // END