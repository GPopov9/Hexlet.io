const dnaToRNA = (str) => {
    let newStr= "";
    for (let i = 0; i < str.length; i += 1) {
        let char = str[i];
        switch (char) {
            case 'G':
                char = 'C';
                newStr += char;
                break;
            case 'C':
                char = 'G';
                newStr += char;
                break;
            case 'T':
                char = 'A';
                newStr += char;
                break;
            case 'A':
                char = 'U';
                newStr += char;
                break;
            default: 
                return null;
            }
        }

    return newStr;
        
};

//console.log(dnaToRNA('ACGTGGTCTTAA'));
//console.log(dnaToRNA('CCGTA'));
//console.log(dnaToRNA(''));
console.log(dnaToRNA('ACNTG'));
