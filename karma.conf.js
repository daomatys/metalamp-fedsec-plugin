module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [
      'Chrome',
    ],
    files: [{
      pattern: 'src/**/*.test.ts'
    }],
    frameworks: [
      'karma-typescript',
      'jasmine'
    ],
    preprocessors: {
      'src/**/*.test.ts': [
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
    autoWatch: false,
    singleRun: true,
    port: 9876,
    logLevel: config.LOG_INFO,
    concurrency: Infinity
  });
}
