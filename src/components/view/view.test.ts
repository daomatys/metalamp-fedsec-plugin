/* eslint-disable */
import { View } from './view';

describe('Math test', () => {
  it('A', () => {
    expect( View.testFunc(2) ).toBe(4);
  });
  it('B', () => {
    expect( View.testFunc(4) ).toBe(8);
  });
  it('C', () => {
    expect( View.testFunc(8) ).toBe(16);
  });
});
