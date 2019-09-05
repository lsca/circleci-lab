const {sum, pow, multiplication, subtraction} = require('./index.js');

test('adds 1 + 2  to eqaul 3', sumTest);
test('multiplicaiton 1 x 2 to equal 2', multiplicationTest);
test('subtra 2- 1 to equal 1', subtraTest);
test('pow 2 to equal 4', powTest);

/**
 * The test for subtraction function
*/
function subtraTest() {
  expect(subtraction(2, 1)).toBe(1);
}

/**
 * The test for multiplcation function
*/
function multiplicationTest() {
  expect(multiplication(1, 2)).toBe(2);
}

/**
 * The test for sum function
*/
function sumTest() {
  expect(sum(1, 2)).toBe(3);
}


/**
 * The test for pow function
*/
function powTest() {
  expect(pow(2)).toBe(4);
}
