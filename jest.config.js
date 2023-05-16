module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    globals: {
      'ts-jest': {
        tsconfig: {
          // allow js in ts-jest
          allowJs: true,
        },
      },
    },
  };
  