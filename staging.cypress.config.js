const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "baseUrl": "https://docs.cypress.io/guides/references/configuration",
    //  "viewportWidth": 812,
    // "viewportHeight": 375,
    //"defaultCommandTimeout" :20000,
    "pageLoadTimeout":120000,
    "retries":{"runMode": 2, "openMode": 3 },

    "env":{
        
      "username" : "Admin",
      "password": "admin123",
      "url":"xyz.com"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
