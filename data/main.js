import { createCustomers, createPurchases } from "./create_data.js";
import { createTables } from "./create_tables.js";
import { insertCustomers, insertPurchases } from "./insert_data.js";
import { pool } from "../db.js";

createTables(pool)
  .then(() => {
    console.log("Tables created successfully");
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
  });

const customers = [];
let purchases = [];

for (let i = 0; i < 100; i++) {
  const customer = createCustomers();
  customers.push(customer);
  purchases = purchases.concat(createPurchases(customer));
}

insertCustomers(pool, customers)
  .then(() => {
    console.log("Customers inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting customers:", err);
  });

insertPurchases(pool, purchases)
  .then(() => {
    console.log("Purchases inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting purchases:", err);
  });
