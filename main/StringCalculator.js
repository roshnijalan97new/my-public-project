function add(numbers) {
  const num1 = parseInt(numbers.split(",")[0]);
  const num2 = parseInt(numbers.split(",")[1]);
  if (num2) return num1 + num2;
  else if (num1) return num1;
  else return 0;
}

module.exports = add;
