
const isHappy = (str) => {
    let sum1 = 0,
        sum2 = 0;
    if (str.length % 2 === 0) {
        for (let i = 0, j = str.length-1; i < 0.5*str.length, j >= 0.5*str.length; i++,  j--) {
            sum1 += +str[i];
            sum2 += +str[j];
            console.log(sum1);
            console.log(sum2);
        }
    } else {
        console.log("Incorrect string!");
    }

    if (sum1 === sum2) {
        return true;
    } return false;

};

console.log(isHappy('385916'));