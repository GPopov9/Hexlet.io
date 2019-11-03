'use strict';

const reverse = (str) => {
    let i = 1; 
    let newStr='';
    
    while (i <= str.length) {
        newStr = newStr + str[str.length - i];
        i = i + 1;
    }
    return newStr;
};

console.log(reverse("aaaa"));