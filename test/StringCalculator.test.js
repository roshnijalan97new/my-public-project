const add = require('../main/StringCalculator');

// Simple add function Test Cases
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself when there is one number', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});
//add method to handle any amount of numbers
test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});