export async function insertCustomers(pool, customers) {
for (const customer of customers) {
    await pool.query(`
    INSERT INTO customers (id, first_name, last_name, birth_date, state, email)
    VALUES ($1, $2, $3, $4, $5, $6)
    `, [customer.id, customer.firstName, customer.lastName, customer.birthDate, customer.state, customer.email]);
}
}

export async function insertPurchases(pool, purchases) {
for (const purchase of purchases) {
    await pool.query(`
    INSERT INTO purchases (customer_id, product, price, date, status)
    VALUES ($1, $2, $3, $4, $5)
    `, [purchase.customerId, purchase.product, purchase.price, purchase.date, purchase.status]);
}
}
