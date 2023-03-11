const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: '429rnt',
    e2e: {
        defaultCommandTimeout: 6000,
        specPattern: 'cypress/e2e/**/*.cy.js',
        viewportWidth: 1600,
        viewportHeight: 900,
        baseUrl: '${{ secrets.BASE_URL_BUGER_EATS }}',
        video: true,
    },
});
