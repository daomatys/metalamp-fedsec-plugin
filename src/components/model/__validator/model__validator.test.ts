/* eslint-disable */
import ModelValidator from './model__validator';

describe('Math test', () => {
  it('A', () => {
    expect( ModelValidator.testFunc(2) ).toBe(4);
  });
  it('B', () => {
    expect( ModelValidator.testFunc(4) ).toBe(8);
  });
  it('C', () => {
    expect( ModelValidator.testFunc(8) ).toBe(16);
  });
});
