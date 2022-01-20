/* eslint-disable */
import JasmineExpect from 'jasmine-expect';
import Presenter from './presenter';

describe('PRESENTER TESTS:', () => {

  describe('RENDERING PART:', () => {
    const wrapRef = 'body';
    it('not a null', () => {
      expect( Presenter.defineElementByRef(wrapRef) ).not.toBeNull();
    });

    it('node equivalence', () => {
      expect( Presenter.defineElementByRef(wrapRef) ).toBe( document.body );
    });

    it('node equivalence', () => {
      expect( Presenter.defineElementByRef(document.body) ).toBe( document.body );
    });
    
    it('Non-existent wrap reference throws an error.', () => {
      expect( () => new Presenter('.dlfsfkosok') ).toThrowAnyError();
    });
  });
});
