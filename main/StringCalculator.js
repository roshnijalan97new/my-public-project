function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const numArray = numbers.split(",");
    return numArray.reduce((total, num) => total + parseInt(num), 0);
}

module.exports = add;
