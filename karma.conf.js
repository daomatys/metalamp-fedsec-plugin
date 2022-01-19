module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
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
      'Chrome'
    ],
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
