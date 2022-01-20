/* eslint-disable */
import Presenter from './presenter';

describe('Math test', () => {
  it('A', () => {
    expect( Presenter.testFunc(2) ).toBe(4);
  });
  it('B', () => {
    expect( Presenter.testFunc(4) ).toBe(8);
  });
  it('C', () => {
    expect( Presenter.testFunc(8) ).toBe(16);
  });
});
