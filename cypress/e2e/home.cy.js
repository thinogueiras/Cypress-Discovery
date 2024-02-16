describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve validar o título', () => {
        cy.title().should('eq', 'Buger Eats');
    });

    it('Deve validar o logo Buger Eats', () => {
        cy.get('#page-home .content img[alt*="Buger Eats"]');
    });

    it('Deve validar o texto do cabeçalho', () => {
        cy.get('#page-home .content h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    });

    it('Deve validar o texto central', () => {
        cy.get('#page-home .content p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.');
    });
});
