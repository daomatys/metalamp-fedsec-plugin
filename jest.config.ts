import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
};

export default config;
