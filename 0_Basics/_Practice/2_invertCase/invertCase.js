const invertCase = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i += 1) {
        let char = str[i];
        if (char == char.toUpperCase()) {
            char = char.toLowerCase();
            newStr += char;
        } else if (char == char.toLowerCase()) {
            char = char.toUpperCase();
            newStr += char;
        }
    }
    return newStr;

};

console.log(invertCase('Hello, World!'));