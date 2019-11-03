// import { toUpperCase } from "./string";

import { length } from './strings';

// BEGIN (write your solution here)

const firstUpper = (str) => {
    let tempStr = str.split(' ');

    let newStr = [];

    for (let i = 0; i < length(tempStr); i++) {
        newStr.push(tempStr[i].charAt(0).toUpperCase()+tempStr[i].slice(1));
    }

    newStr = newStr.join(' ');
    console.log(newStr);
    return newStr;



   
    
};

export default isHappyTicket;
firstUpper('hello, world!');

// END
