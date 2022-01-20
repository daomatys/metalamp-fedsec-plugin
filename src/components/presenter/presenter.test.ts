/* eslint-disable */
import Presenter from './presenter';

describe('PRESENTER TESTS:', () => {

  describe('RENDERING PART:', () => {
    const wrapRef = 'body';
    const presenter = new Presenter(wrapRef);
    it('not a null', () => {
      expect( presenter.defineElementByRef(wrapRef) ).not.toBeNull();
    });
    it('node equivalence', () => {
      expect( presenter.defineElementByRef(wrapRef) ).toBe( document.body );
    });

    const presenterB = new Presenter(document.body);
    it('node equivalence', () => {
      expect( presenterB.defineElementByRef(document.body) ).toBe( document.body );
    });

    it('Non-existent wrap reference throws an error.', () => {
      expect( new Presenter('.dlfsfkosok') ).toThrow(new Error('Incorrect wrap element referrence!'));
    });
  });
});
