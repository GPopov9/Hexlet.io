'use strict';

let smallestDivisor = (num) => {
    let divis = 2; 

    if (num <= 0) {
        return NaN;
    } else if (num === 1) {
        return 1;
    } else {
        while (num % divis != 0) {
            ++divis;
        }
    }
    
    

    return divis;
};

console.log(smallestDivisor(17));