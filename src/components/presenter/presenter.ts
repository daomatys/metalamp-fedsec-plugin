type IWrapRef = Element | string;

class Presenter {
  private readonly wrapElement:Element;

  constructor(wrapRef:IWrapRef) {
    this.wrapElement = Presenter.defineElementByRef(wrapRef);
    this.render();
  }

  static defineElementByRef(wrapRef:IWrapRef):Element {
    const caseWrapRefSelector = typeof wrapRef === 'string';

    if (caseWrapRefSelector) {
      const caseWrapRefExists = document.querySelector(wrapRef);

      if (caseWrapRefExists) {
        return caseWrapRefExists;
      }
      throw new Error('Incorrect wrap element reference!');
    } else {
      return wrapRef;
    }
  }

  private render() {
    const { wrapElement } = this;
    const insertableElement = document.createElement('div');
    wrapElement.insertAdjacentElement('afterbegin', insertableElement);
  }
}

export default Presenter;
