import './commands';
import 'cypress-file-upload';

afterEach(() => {
    cy.screenshot();
});
