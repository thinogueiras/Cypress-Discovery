const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: '429rnt',
    e2e: {
        defaultCommandTimeout: 6000,
        specPattern: 'cypress/e2e/**/*.cy.js',
        viewportWidth: 1440,
        viewportHeight: 900,
        baseUrl: 'https://buger-eats-qa.vercel.app',
        video: true,
    },
});
