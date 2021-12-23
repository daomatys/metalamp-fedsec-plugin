import { testFunc } from './model';

describe('1-module-3-task', () => {
  it('A', () => {
    expect( testFunc(2) ).toBe(4);
  });

  it('B', () => {
    expect( testFunc(4) ).toBe(8);
  });

  it('C', () => {
    expect( testFunc(8) ).toBe(16);
  });
});
