const { sum, multiplication} = require('./index.js');

test('adds 1 + 2  to eqaul 3', sumTest);
test('multiplicaiton 1 x 2 to equal 2', multiplicationTest)

function multiplicationTest(){
  expect(multiplication(1,2)).toBe(2);
}

function sumTest(){
  expect(sum(1,2)).toBe(3);
}