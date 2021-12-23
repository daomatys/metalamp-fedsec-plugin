module.exports = function(config) {
  config.set({
    browsers: [
      'Chrome',
    ],
    files: [
      {
        pattern: './src/**/*.spec.ts'
      }
    ],
    plugins: [
      'karma-jasmine',
      'karma-typescript',
      'karma-coverage',
      'karma-viewport',
      'karma-chrome-launcher'
    ],
    frameworks: [
      'karma-typescript',
      'viewport',
      'jasmine'
    ],
    preprocessors: {
      './src/**/*.spec.ts': [
        'karma-typescript',
        'coverage'
      ]
    },
    reporters: [
      'progress',
      'coverage',
      'karma-typescript'
    ],
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },
    autoWatch: true,
    singleRun: true,
  });
}
