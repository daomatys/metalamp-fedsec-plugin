interface ISliderOptionsList {
  outputSelector?: string,
  vertical?: boolean,
  step?: number,
  scale?: boolean,
};

interface ISliderOptions {
  options: ISliderOptionsList,
};

interface ISliderFunction {
  (this: JQuery, options: ISliderOptionsList): JQuery,
};

export {
  ISliderFunction,
  ISliderOptionsList,
  ISliderOptions,
};
