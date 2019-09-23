




/**
 * Adds two numbers together.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @return {int} Return the sum of x and y
*/
function sum(x, y) {
  return x + y;
}

/**
 * Subtraction two numbers.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @return {int} Return the subtraction of x and y
*/
function subtraction(x, y) {
  return x - y;
}

/**
 * Multiplicate two numbers.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @return {int} Return the multiplication of x and y
*/
function multiplication(x, y) {
  return x * y;
}

/**
 * Multiplicate two numbers.
 * @param {int} x The first number.
 * @return {int} Return the pow of x
*/
function pow(x) {
  return x*x;
}

module.exports = {
  sum,
  multiplication,
  subtraction,
  pow,
};
