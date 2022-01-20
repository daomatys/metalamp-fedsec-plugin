/* eslint-disable */
import Presenter from './presenter';

describe('Math test', () => {
  it('A2', () => {
    expect( Presenter.testFunc(2) ).toBe(4);
  });
  it('B4', () => {
    expect( Presenter.testFunc(4) ).toBe(8);
  });
  it('C16', () => {
    expect( Presenter.testFunc(8) ).toBe(16);
  });
});
