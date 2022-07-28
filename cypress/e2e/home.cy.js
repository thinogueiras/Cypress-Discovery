describe('Home Page', () => {
    it('Deve validar se o app está online', () => {
        cy.viewport(1400, 900);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('#page-home .content img[alt*="Buger Eats"]');
        cy.get('#page-home .content h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    });
});
