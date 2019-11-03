const akkerman = (m, n) => {
    if (m === 0) {
        return n + 1;
    } else if (m > 0 && n === 0) {
        return akkerman(m - 1, 1);
    } else if (m > 0 && n > 0) {
        return akkerman(m - 1, akkerman(m, n - 1));
    }
};

console.log(akkerman(2,3));