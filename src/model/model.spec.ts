import { testFunc } from './model';

describe('1-module-3-task', () => {
  it('должна делать первый символ заглавным', () => {
    expect( testFunc(2) ).toBe(4);
  });

  it('должна работать для строки из одной буквы', () => {
    expect( testFunc(4) ).toBe(8);
  });

  it('должна работать для пустой строки', () => {
    expect( testFunc(8) ).toBe(16);
  });
});
