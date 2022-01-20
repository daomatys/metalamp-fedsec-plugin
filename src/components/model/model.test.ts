/* eslint-disable */
import Model from './model';

describe('Math test', () => {
  it('A', () => {
    expect( Model.testFunc(2) ).toBe(4);
  });
  it('B', () => {
    expect( Model.testFunc(4) ).toBe(8);
  });
  it('C', () => {
    expect( Model.testFunc(8) ).toBe(16);
  });
});
