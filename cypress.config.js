const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", //for html reports
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  viewportWidth: 1920,
    viewportHeight: 1024,
    defaultCommandTimeout: 30000,
    requestTimeout: 20000,
    responseTimeout: 30000,
    pageLoadTimeout: 60000,
    video: false,
    watchForFileChanges: false,
    retries: {
        runMode: 2,
    },
    e2e: {
    baseUrl : "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    experimentalsessionsupport : true,
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true
      require('cypress-mochawesome-reporter/plugin')(on) // for html mochawesome reports
      allureWriter(on, config);                          // for allure reports
            return config;
    },

    env:{
      "devUrl":"www.devurl.com",
      "qaUrl":"www.qaurl.com",
      "stagingUrl":"www.stagingurl.com",
      "productionUrl":"www.productionurl.com"
    }
  },
});
