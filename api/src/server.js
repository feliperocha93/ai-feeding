import cors from "cors";
import express from "express";

import { getResponse } from "./ai/services.js";
import { pool } from "./db/client.js";
import { getCustomerInfo } from "./db/services.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.post("/support", async (req, res) => {
  const { email, message } = req.body;
  const customerInfo = await getCustomerInfo(pool, email);
  const response = await getResponse(customerInfo, message);
  res.send(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
