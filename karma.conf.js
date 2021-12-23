module.exports = function(config) {
  config.set({
    browsers: [
      //'Chrome',
      'ChromeHeadless'
    ],
    files: [
      {
        pattern: './src/**/*.spec.ts'
      }
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
