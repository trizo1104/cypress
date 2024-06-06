const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here     
    },

    specPattern: "./cypress/test/**.*",
    baseUrl: "http://localhost:3000/"

  },
});