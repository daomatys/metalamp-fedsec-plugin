//import jQuery from 'jquery';
import DEFAULTS from './defaults';

interface ISliderOptions{
  outputSelector?: string,
  vertical?: boolean,
  step?: number,
  scale?: boolean,
}

interface ISliderFunction {
  (this: JQuery, options: ISliderOptions): JQuery,
}

interface ISlider extends ISliderFunction {
  options: ISliderOptions,
}

declare global {
  interface JQuery {
    slider: ISlider,
  }
}

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
(function($) {
  const INIT = function(this: JQuery, options: ISliderOptions): JQuery {
    // Merge the global options with the options given as argument.
    options = $.extend({}, $.fn.slider.options, options);
    // Check if required options are missing.
    if (!options.outputSelector) {
      console.error(
        'Example plugin options are missing required parameter "outputSelector": ',
        JSON.stringify(options)
      );
    }
    // Do what the plugin should do. Here we create an instance of the separate service
    
    // Return the jQuery object for chaining.
    return this;
  };

  $.fn.slider = Object.assign<ISliderFunction, ISliderOptions>(INIT, DEFAULTS);
})(jQuery);
