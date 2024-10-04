function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const delimiters=/[\n,]/; //split the input by comma or new line
    const numArray = numbers.split(delimiters);
    return numArray.reduce((total, num) => total + parseInt(num), 0);
}

module.exports = add;
