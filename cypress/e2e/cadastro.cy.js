import SignupPage from '../pages/SignupPage';

describe('Cadastro', () => {
    it('Deve cadastrar um entregador com sucesso', () => {
        const deliver = {
            name: 'Thiago Nogueira',
            cpf: '00000014141',
            email: 'thiago@gmail.com',
            whatsApp: '16999999999',
            address: {
                postalCode: '14092470',
                street: 'Rua Antônio Luiz Fracasso',
                number: '632',
                details: 'Apto 632',
                district: 'Residencial e Comercial Palmares',
                city_state: 'Ribeirão Preto/SP',
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg',
        };

        const signup = new SignupPage();

        signup.go();
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

        signup.modalContentShouldBe(expectMessage);

        const btnFechar = '.swal2-popup.swal2-modal.swal2-icon-success.swal2-show button[type="button"].swal2-confirm';

        signup.modalCloseAndValidateMessage(btnFechar);
    });

    it('Deve validar o CPF inválido', () => {
        const deliver = {
            name: 'Thiago Nogueira',
            cpf: '000000141AA',
            email: 'thiago@gmail.com',
            whatsApp: '16999999999',
            address: {
                postalCode: '14092470',
                street: 'Rua Antônio Luiz Fracasso',
                number: '632',
                details: 'Apto 632',
                district: 'Residencial e Comercial Palmares',
                city_state: 'Ribeirão Preto/SP',
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg',
        };

        const signup = new SignupPage();
        signup.go();
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');
    });
});
