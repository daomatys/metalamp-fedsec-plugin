type IWrapRef = HTMLElement | string;
type IElement = HTMLElement | null;

class Presenter {
  private wrapElement:IElement;

  constructor(wrapRef:IWrapRef) {
    this.wrapElement = this.defineElementByRef(wrapRef);
    this.render(this.wrapElement);
  }

  testFunc(x:number):number {
    return x * 2;
  }

  defineElementByRef(wrapRef:IWrapRef):HTMLElement {
    const caseWrapIsSelector = typeof wrapRef === 'string';
    return caseWrapIsSelector ? document.querySelector(wrapRef) || document.body : wrapRef;
  }

  private render(wrapElement:HTMLElement) {
    const insertableElement = document.createElement('<span>HelloWorld!</span>');
    wrapElement.insertAdjacentElement('afterbegin', insertableElement);
  }
}

export default Presenter;
