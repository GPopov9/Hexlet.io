const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i += 1) {
        if (num % i == 0) {
            sum += i;
        }
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
};

console.log(isPerfect(7));