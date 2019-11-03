
const digitReverse = (num) => {
    let str = num.toString().replace(/0*$/,"");
    let newStr = '';
    let i = str.length;

    console.log(str);

    for (i; i > 0; i--) {
        newStr += str[i-1];
    }
    
    if (num < 0) {
        newStr = -(parseInt(newStr));
    }

    console.log(newStr);

    return newStr;
};



digitReverse(-8970000);