module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1', // override default, why not
    '@features/(.*)': '<rootDir>/src/app/features/$1', // add new mapping
    '@shared/(.*)': '<rootDir>/src/app/shared/$1', // add new mapping
    '@environment/(.*)': '<rootDir>/src/environments/$1', // add new mapping
  },
};
