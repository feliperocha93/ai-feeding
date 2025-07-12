import { calculateAge, formatPurchases } from "../utils.js";
import { genai } from "./client.js";

const systemInstruction = (customer, customerPurchases) => `
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
    Name: ${customer.first_name} ${customer.last_name}
    Email: ${customer.email}
    State: ${customer.state}
    Age: ${calculateAge(customer.birth_date)} years old
    Purchases: ${formatPurchases(customerPurchases)}
  </CUSTOMER_INSTRUCTIONS>
`;

const getResponse = async (customerInfo, question) => {
  const response = await genai.models.generateContent({
    model: "gemini-2.0-flash",
    config: {
      systemInstruction: systemInstruction(customerInfo.customer, customerInfo.customerPurchases),
    },
    contents: question,
  });

  return response.candidates[0].content.parts[0].text;
};

export { getResponse };
