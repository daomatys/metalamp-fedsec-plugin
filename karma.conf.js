module.exports = function(config) {
  config.set({
    frameworks: [
      "viewport",
      "jasmine",
      "karma-chrome-launcher"
    ],
    files: [
      "./src/**/*.spec.ts"
    ]
  });
}