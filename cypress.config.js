const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  // chromeWebSecurity: false,
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
