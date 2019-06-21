const path = require('path');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/app/$1"
  },
  // "testResultsProcessor": "<rootDir>/node_modules/ts-jest/coverageprocessor.js",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "../../app/**/*.{ts,tsx}"
  ],
  "coverageReporters": [
    "html",
    "json"
  ],
  reporters: [
    ["../../node_modules/jest-html-reporter", {
      "pageTitle": "Vue-nuxt-ts-converter Test Report",
      "outputPath": path.resolve(__dirname, "./reporter/reporter.html"),
      "theme": 'lightTheme'
    }],
    "default"
  ]
};