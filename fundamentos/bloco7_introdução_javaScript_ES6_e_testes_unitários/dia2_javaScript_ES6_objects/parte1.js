const order = {
name: 'Rafael Andrade',
phoneNumber: '11-98763-1416',
address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
},
order: {
    pizza: {
    marguerita: {
        amount: 1,
        price: 25,
    },
    pepperoni: {
        amount: 1,
        price: 20,
    }
    },
    drinks: {
    coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
    }
    },
    delivery: {
    deliveryPerson: 'Ana Silveira',
    price: 5,
    }
},
payment: {
    total: 60,
},
};

const customerInfo = (order) => {
// Adicione abaixo as informações necessárias.
    const person = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phone = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const ap = order.address.apartment;

    console.log(`Olá ${person}, entrega para: ${name}, Telefone: ${phone}, ${street}, Nº: ${number}, AP: ${ap}.`)

}

customerInfo(order);

const orderModifier = (order) => {
// Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 'R$ 50,00';
    const name = order.name;
    const pizzas = Object.keys(order.order.pizza);
    const beverage = order.order.drinks.coke.type;
    const price = order.payment.total;

    console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${beverage} é ${price}.`)
}

orderModifier(order);