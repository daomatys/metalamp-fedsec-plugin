/* eslint-disable */
import Presenter from './presenter';

describe('PRESENTER TESTS', () => {
  describe('check', () => {
    const presenter = new Presenter('body');

    it('A2', () => {
      expect( presenter.testFunc(2) ).toBe(4);
    });
    it('B4', () => {
      expect( presenter.testFunc(4) ).toBe(8);
    });
    it('C16', () => {
      expect( presenter.testFunc(8) ).toBe(16);
    });
  });

  describe('render', () => {
    const wrapRef = 'body';
    const presenter = new Presenter(wrapRef);

    it('not a null', () => {
      expect( presenter.defineElementByRef(wrapRef) ).not.toBeNull();
    });
    it('node equivalence', () => {
      expect( presenter.defineElementByRef(wrapRef) ).toBe( document.body );
    });
  });
});
