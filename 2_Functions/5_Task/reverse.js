const reverse = (str) => {
    const lastIndex =  str.length - 1;
    const iter = (index, acc) => {
        if (index > lastIndex) {
            return acc;
        }
        return iter(index + 1, str[index] + acc);
    };

    return iter (0,"");
};

console.log(reverse("z"));