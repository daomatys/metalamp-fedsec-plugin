module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [
      'Chrome',
    ],
    files: [{
      pattern: './src/**/*.spec.ts'
    }],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-typescript'),
    ],
    frameworks: [
      'karma-typescript',
      'jasmine'
    ],
    preprocessors: {
      './src/**/*.spec.ts': [
        'karma-typescript',
        'coverage'
      ]
    },
    reporters: [
      'kjhtml',
      'progress',
      'coverage',
      'karma-typescript'
    ],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      bundlerOptions: {
        transforms: [
          require('karma-typescript-es6-transform')()
        ]
    }
    },
    colors: true,
    autoWatch: true,
    singleRun: true,
  });
}
