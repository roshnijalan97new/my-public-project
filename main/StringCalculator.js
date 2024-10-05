class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (numbers === "") {
      return 0;
    }

    let delimiter = /[\n,]/; // Default delimiter: newline or comma
    let numString = numbers;

    // Check for a custom delimiter
    if (numbers.startsWith("//")) {
      // Check for multi-character delimiter in the format //[***]\n
      const multiCharDelimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
      if (multiCharDelimiterMatch) {
       // Extract all delimiters between []
        const delimiters = [...numbers.matchAll(/\[(.*?)\]/g)].map(match => match[1]);
          // Create a regex to match any of the delimiters
        delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
        numString = numbers.slice(multiCharDelimiterMatch[0].length);
      } else {
        // Check for single character delimiter in the format //;\n
        const singleCharDelimiterMatch = numbers.match(/^\/\/(.)\n/);
        if (singleCharDelimiterMatch) {
          delimiter = new RegExp(
            singleCharDelimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "g"
          );
          numString = numbers.slice(singleCharDelimiterMatch[0].length);
        }
      }
    }

    // Split the numbers string using the identified delimiter
    const numArray = numString
      .split(delimiter)
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num) && num <= 1000); // Ignore numbers > 1000
    const negatives = numArray.filter((num) => parseInt(num) < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((total, num) => total + num, 0); // Return the sum
  }

  GetCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
