import {
  ISliderInitializer,
  ISliderOptionsList,
  ISliderOptions,
} from './types/plugin';

import Presenter from './components/presenter/presenter';

import DEFAULTS from './defaults';

declare global {
  interface JQuery {
    slider: ISliderOptions,
  }
};

(function($) {
  const OPTIONS = {
    options: DEFAULTS,
  };

  const INIT = function initSlider(this: JQuery, options: ISliderOptionsList): JQuery {
    options = $.extend({}, $.fn.slider.options, options);

    if (!options.outputSelector) {
      console.error(
        'Example plugin options are missing required parameter "outputSelector": ',
        JSON.stringify(options)
      );
      return this;
    }
    new Presenter(options);  
    
    return this;
  };

  $.fn.slider = Object.assign<ISliderInitializer, ISliderOptions>(INIT, OPTIONS);
})(jQuery);
