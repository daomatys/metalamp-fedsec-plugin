interface ISliderOptionsList {
  outputSelector?: string,
  vertical?: boolean,
  step?: number,
  scale?: boolean,
};

interface ISliderOptions {
  options: ISliderOptionsList,
};

interface ISliderInitializer {
  (this: JQuery, options: ISliderOptionsList): JQuery,
};

export {
  ISliderInitializer,
  ISliderOptionsList,
  ISliderOptions,
};
