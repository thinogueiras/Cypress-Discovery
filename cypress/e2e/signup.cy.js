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

    it('Should validate invalid user WhatsApp number', () => {
        deliver.whatsApp = '11@@999!!!';
        signup.fillForm(deliver);
        signup.clickDeliverVehicle(deliver.delivery_method);
        signup.uploadCnh(deliver.cnh);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Whatsapp com formato incorreto');
    });

    it('Should validate invalid user PostalCode number', () => {
        deliver.address.postalCode = '123abc-000';
        signup.clickOnPostalCodeButton();
        signup.alertMessageShouldBe('Informe um CEP válido');
    });
});

describe('Validate required fields', () => {
    before(() => {
        signup.go();
        signup.submit();
    });

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
        it(`${msg.field} is required`, () => {
            signup.alertMessageContains(msg.output);
        });
    });
});
