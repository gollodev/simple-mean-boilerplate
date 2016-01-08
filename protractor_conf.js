
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['public/test/e2e/**/*.e2e.js']
};
