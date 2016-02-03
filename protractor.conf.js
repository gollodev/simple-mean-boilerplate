exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'mocha',

  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/client/e2e/**/*.e2e.js']

};
