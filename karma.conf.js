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
      '**/*.spec.ts': 'karma-typescript'
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        include: [
          './node_modules',
         ]
      },
    },
    reporters: [
      'progress',
      'karma-typescript'
    ],
    autoWatch: true
  });
}
