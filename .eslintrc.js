module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint',
    'fsd'
  ],
  extends: [
    'airbnb-base',
    'plugin:fsd/all'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'import/no-unresolved': 'off',
    'linebreak-style': [
      "error",
      "windows"
    ]
  }
};