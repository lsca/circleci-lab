const { sum, multiplication, subtra } = require('./index.js');

test('adds 1 + 2  to eqaul 3', sumTest);
test('multiplicaiton 1 x 2 to equal 2', multiplicationTest)
test('subtra 2- 1 to equal 1', subtraTest)

function subtraTest(){
  expect(subtra(2,1)).toBe(1);
}

function multiplicationTest(){
  expect(multiplication(1,2)).toBe(2);
}

function sumTest(){
  expect(sum(1,2)).toBe(3);
}