// @ts-check

import { chunk } from 'lodash';

// BEGIN (write your solution here)
const ipToInt = (dot) => dot.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
const intToIp = (int) => ( (int>>>24) +'.' + (int>>16 & 255) +'.' + (int>>8 & 255) +'.' + (int & 255) );

export {ipToInt, intToIp};
// END

/* // BEGIN Tutor
export const ipToInt = (ip) => {
    const ipInHex = ip
      .split('.')
      .map((octet) => Number(octet).toString(16).padStart(2, 0))
      .join('');
  
    return parseInt(ipInHex, 16);
  };
  
  export const intToIp = (int) => {
    const ipInHex = int.toString(16).padStart(8, 0);
  
    return chunk(ipInHex, 2)
      .map((octet) => parseInt(octet.join(''), 16))
      .join('.');
  };
  // END */