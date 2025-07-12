async function getCustomerInfo(pool, email) {
    const customer = await getCustomer(pool, email);
    const customerPurchases = await getCustomerPurchases(pool, customer.id);

    return {
        customer,
        customerPurchases
    }
}

async function getCustomer(pool, email) {
  return (await pool.query(`SELECT * FROM customers WHERE email = '${email}'`)).rows[0];
}

async function getCustomerPurchases(pool, customerId) {
  return (await pool.query(`SELECT * FROM purchases WHERE customer_id = '${customerId}'`)).rows;
}

export { getCustomer, getCustomerPurchases, getCustomerInfo };
