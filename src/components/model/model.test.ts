/* eslint-disable */
import Model from './model';

test('Math test', () => {
  expect( Model.testFunc(2) ).toBe(4);
  expect( Model.testFunc(4) ).toBe(8);
  expect( Model.testFunc(8) ).toBe(16);
  expect( Model.testFunc(10) ).toBe(20);
});
