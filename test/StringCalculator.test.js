const StringCalculator = require("../main/StringCalculator");

let calculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

// Simple add function Test Cases
test("should return 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("should return the number itself when there is one number", () => {
  expect(calculator.add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  expect(calculator.add("1,2")).toBe(3);
});

//Allow the add method to handle any amount of numbers
test("should return the sum of multiple numbers", () => {
  expect(calculator.add("1,2,3,4")).toBe(10);
});

//Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)
test("should return the sum when newlines are used as delimiters", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});

//To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
test("should support different delimiters", () => {
  expect(calculator.add("//;\n1;2")).toBe(3);
});

//If there are multiple negative numbers, show all of them in the exception message, separated by commas.
test("should throw an exception for negative numbers", () => {
  expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("should show all negative numbers in the exception", () => {
  expect(() => calculator.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
});

test("GetCalledCount should return 0 initially", () => {
  expect(calculator.GetCalledCount()).toBe(0);
});

test("GetCalledCount should return the number of times add was invoked", () => {
  calculator.add("1,2");
  calculator.add("3");
  expect(calculator.GetCalledCount()).toBe(2);
});

//If numbers are greater than 1000 those should be ignored
test('Numbers bigger than 1000 should be ignored', () => {
  expect(calculator.add("2,1001")).toBe(2);
  expect(calculator.add("1000,1001,6")).toBe(1006); // 1000 + 6
});

//If the length of delimiters is increased
test('should handle custom delimiters of any length', () => {
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  expect(calculator.add("//[%%]\n4%%5%%6")).toBe(15);
});
