class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
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
    const negatives = numArray.filter((num) => parseInt(num) < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((total, num) => total + parseInt(num), 0);
  }
  GetCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
