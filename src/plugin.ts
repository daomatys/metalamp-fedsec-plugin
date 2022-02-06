import DEFAULTS from './defaults';

interface FedsecSliderOptions {
  
}

interface FedsecSliderRequiredOptions extends FedsecSliderOptions{
  outputSelector: string
}

interface FedsecSliderFunction {
  this: JQuery,
  options: FedsecSliderRequiredOptions
}

interface FedsecSlider {
  options: FedsecSliderRequiredOptions,

  (options?: FedsecSliderOptions): JQuery;
}

interface JQuery {
  fedsecSlider: FedsecSlider
}

function init (this: JQuery, options: FedsecSliderRequiredOptions): JQuery{
  // Merge the global options with the options given as argument.
  options = $.extend({}, $.fn.fedsecSlider.options, options);

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
}

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
(function($) {
  $.fn.fedsecSlider = Object.assign<FedsecSliderFunction, FedsecSliderOptions>(
    init,
    {
      options: DEFAULTS
    }
  );
})(jQuery);
