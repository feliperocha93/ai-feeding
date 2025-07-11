import { fakerPT_BR as faker } from "@faker-js/faker";

export function createCustomers() {
  const id = faker.string.uuid();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const birthDate = faker.date.birthdate();
  const state = faker.location.state();
  const email = faker.internet.email({ firstName, lastName });

  return {
    id,
    firstName,
    lastName,
    birthDate,
    state,
    email,
  };
}

export function createPurchases(customer) {
  const purchaseProbability = [
    { value: 0, weight: 10 },
    { value: 1, weight: 50 },
    { value: 2, weight: 20 },
    { value: 3, weight: 10 },
    { value: 4, weight: 7 },
    { value: 5, weight: 3 },
  ];

  const nPurchases = faker.helpers.weightedArrayElement(purchaseProbability);

  const status = [
    "confirmada",
    "pagamento confirmado",
    "em separação",
    "em transporte",
    "entregue",
    "atrasada",
    "cancelada pelo usuário",
    "cancelada pelo vendedor",
  ];

  const purchases = [];

  for (let i = 0; i < nPurchases; i++) {
    const purchase = {
      customerId: customer.id,
      product: faker.commerce.productName(),
      price: faker.commerce.price({ min: 10, max: 1000, dec: 2 }),
      date: faker.date.recent({ days: 10 }),
      status: faker.helpers.arrayElement(status),
    };

    purchases.push(purchase);
  }

  return purchases;
}
