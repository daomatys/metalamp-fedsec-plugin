module.exports = function(config) {
  config.set({
    frameworks: [
      'karma-typescript',
      'viewport',
      'jasmine'
    ],
    browsers: [
      'Chrome'
    ],
    files: [
      {
        pattern: './src/**/*.spec.ts'
      }
    ],
    preprocessors: {
      './src/**/*.spec.ts': [
        'karma-typescript',
        'coverage'
      ]
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
    },
    reporters: [
      'progress',
      'coverage',
      'karma-typescript'
    ],
    autoWatch: true
  });
}
