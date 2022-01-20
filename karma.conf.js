module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'jasmine-matchers',
      'karma-typescript'
    ],
    files: [
      {
        pattern: 'src/**/*.ts'
      }
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.ts': [
        'karma-typescript',
        'coverage'
      ]
    },
    reporters: [
      'progress',
      'coverage',
      'karma-typescript'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [
      'ChromeHeadless'
    ],
    concurrency: Infinity
  })
}
