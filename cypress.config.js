const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "pbfv37",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
