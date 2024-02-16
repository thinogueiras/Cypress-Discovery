class SignupPage {
    go() {
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
        cy.url().should('include', '/deliver');
    }

    fillForm(deliver) {
        cy.get('.field-group input[placeholder="Nome completo"]').type(deliver.name);
        cy.get('.field-group input[placeholder="CPF somente números"]').type(deliver.cpf);
        cy.get('.field-group input[placeholder="E-mail"]').type(deliver.email);
        cy.get('.field-group input[placeholder="Whatsapp"]').type(deliver.whatsApp);
        cy.get('.field-group input[name="postalcode"]').type(deliver.address.postalCode);
        cy.get('.field-group input[type=button][value="Buscar CEP"]').click();
        cy.get('.field-group input[name="address-number"]').type(deliver.address.number);
        cy.get('.field-group input[name="address-details"]').type(deliver.address.details);
        cy.get('.field input[name="address"]').should('have.value', deliver.address.street);
        cy.get('.field input[name="address-number"]').should('have.value', deliver.address.number);
        cy.get('.field input[name="district"]').should('have.value', deliver.address.district);
        cy.get('.field input[name="city-uf"]').should('have.value', deliver.address.city_state);
    }

    clickOnPostalCodeButton() {
        cy.get('.field input[type="button"]').click();
    }

    clickDeliverVehicle(vehicleType) {
        cy.contains('.delivery-method li', vehicleType).click();
    }

    uploadCnh(document) {
        cy.get('.dropzone input[accept^="image"]').attachFile(`/images/${document}`);
    }

    submit() {
        cy.get('form button[type="submit"]').should('have.text', 'Cadastre-se para fazer entregas').click();
    }

    modalContentShouldBe(expectMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectMessage);
    }

    alertMessageShouldBe(expectMessageAlertError) {
        cy.get('span.alert-error').should('have.text', expectMessageAlertError).and('be.visible');
    }

    alertMessageContains(expectMessageAlertError) {
        cy.get('span.alert-error').contains(expectMessageAlertError).should('be.visible');
    }
}

export default new SignupPage();
