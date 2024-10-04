module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // This tells Jest to use ts-jest for TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  };
  