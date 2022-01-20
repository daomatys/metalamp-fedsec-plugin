type IWrapRef = Element | string;

class Presenter {
  private readonly _wrapElement:Element;

  constructor(wrapRef:IWrapRef) {
    this._wrapElement = this.defineElementByRef(wrapRef);
    this.render();
  }

  defineElementByRef(wrapRef:IWrapRef):Element {
    const caseWrapRefSelector = typeof wrapRef === 'string';

    if ( caseWrapRefSelector ) {
      const caseWrapRefExists = document.querySelector(wrapRef);

      if ( caseWrapRefExists ) {
        return caseWrapRefExists;
      }
      else {
        throw new Error('Incorrect wrap element referrence!');
      }
    } else {
      return wrapRef;
    }
  }

  private render() {
    const wrapElement = this._wrapElement;
    const insertableElement = document.createElement('div');
    wrapElement.insertAdjacentElement('afterbegin', insertableElement);
  }
}

export default Presenter;
