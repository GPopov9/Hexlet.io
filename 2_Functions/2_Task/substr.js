const substr = (str, start = 0, len = str.length) => {
    
    let index = str.length;
    
    if (len === 0 || start > index) {
        return "";
    }
    
    if (start < 0) {
        start = 0;
    }

    if (len < 0) {
        len = 1;
    }

    let finish = start + len;
    let newStr = "";
        

    if (finish > index) {
        finish = index;
    }
        
    for (let i = start; i < finish; i += 1) {
        let char = str[i];
        newStr += char;
    }

    return newStr;
   
};

// console.log(substr("abba",0,1));
// console.log(substr("abba",-10,2));
// console.log(substr("abba",-1,100));
// console.log(substr("abba",-1,-1));
// console.log(substr("abba",1,-10));
// console.log(substr("abba",1,10));
// console.log(substr("abba",1,0));
 console.log(substr(""));