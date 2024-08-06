module.exports = {
  testMatch: [
    "<rootDir>/tests/integration/**/*.spec.js",
    // "<rootDir>/tests/unit/**/*.spec.js"
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "test-results", outputName: "report.xml" },
    ],
  ],
  transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
  testTimeout: 30000,
  preset: '@vue/cli-plugin-unit-jest',
};
