import { GoogleGenAI } from "@google/genai";
import { pool } from "./db.js";
import { calculateAge, formatPurchases } from "./utils.js";

const genai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

const customer = await pool.query(
  `SELECT * FROM customers WHERE id = '7f6b31e0-7df4-49f8-badf-1c44a6133376';`
);

const customerPurchases = await pool.query(
  `SELECT * FROM purchases WHERE customer_id = '7f6b31e0-7df4-49f8-badf-1c44a6133376';`
);

const systemInstruction = `
<SYSTEM_INSTRUCTIONS>
  You are the customer support of a e-commerce.
  You are talking to a customer who is asking about an order or a product.
  You must answer only about orders and products.
  For topics that are not about orders or products, you must say that you are not able to answer that question.
  If you don't have the information, you must say that you are not able to answer that question.
  You should answer in the same language as the customer.
  You should answer according to the customer's age.
</SYSTEM_INSTRUCTIONS>

<CUSTOMER_INSTRUCTIONS>
  Name: ${customer.rows[0].first_name} ${customer.rows[0].last_name}
  Email: ${customer.rows[0].email}
  State: ${customer.rows[0].state}
  Age: ${calculateAge(customer.rows[0].birth_date)} years old
  Purchases: ${formatPurchases(customerPurchases.rows)}
</CUSTOMER_INSTRUCTIONS>
`;

const response = await genai.models.generateContent({
  model: "gemini-2.0-flash",
  config: {
    systemInstruction,
  },
  contents: "Qual o prazo de entrega do meu pedido?",
});

console.log(response.candidates[0].content.parts[0].text);
