type IWrap = HTMLElement | string;

class Presenter {
  private wrap: IWrap;

  constructor(wrap: IWrap) {
    this.wrap = wrap;
  }

  static testFunc(x:number):number {
    return x * 2;
  }
}

export default Presenter;
