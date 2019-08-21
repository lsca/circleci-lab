const sum = require('./index.js');

test('adds 1 + 2  to eqaul 3', sumTest);

function sumTest(){
  expect(sum(1,2)).toBe(3);
}