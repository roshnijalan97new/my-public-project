function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiters = /[\n,]/; //it should separate numbers by newline and comma character
  if (numbers.startsWith("//")) {
    const delimiterInfo = numbers.split("\n")[0];
    delimiters = new RegExp(delimiterInfo[2]);
    numbers = numbers.split("\n")[1];
  }

  const numArray = numbers.split(delimiters);
  return numArray.reduce((total, num) => total + parseInt(num), 0);
}

module.exports = add;
