
const isPowerOfThree = (num) => {
    let i = 0;
    let sum = 0;

    while (sum < num) {
        sum = Math.pow(3, i);
        console.log(sum);
        if (sum === num) {
            return true;
        } else {
            i += 1;
        }
    }

    return false;
};

console.log(isPowerOfThree(12));

