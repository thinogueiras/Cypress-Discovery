import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf';

export default {
    deliver: () => {
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: generate(),
            email: faker.internet.email(firstName),
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

        return data;
    },
};
