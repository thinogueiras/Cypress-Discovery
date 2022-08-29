import signup from '../pages/SignupPage';
import signupFactory from '../functions/signupFactory';

describe('Signup page', () => {
    var deliver;
    beforeEach(() => {
        deliver = signupFactory.deliver();
        signup.go();
    });

    it('Should register user as deliver', () => {
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

        signup.modalContentShouldBe(expectMessage);

        const btnFechar = '.swal2-popup.swal2-modal.swal2-icon-success.swal2-show button[type="button"].swal2-confirm';

        signup.modalCloseAndValidateMessage(btnFechar);
    });

    it('Should validate invalid user CPF', () => {
        deliver.cpf = 'x0000000AA3';
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');
    });

    it('Should validate invalid user E-mail', () => {
        deliver.email = 'user.com.br';
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.');
    });
});

describe('Validate required fields', () => {
    before(() => {
        signup.go();
        signup.submit();
    });

    context('Validate messages', () => {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalCode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
        ];

        messages.forEach((msg) => {
            it(`${msg.field} is required`, async () => {
                await signup.alertMessageShouldBe(msg.output);
            });
        });
    });
});
