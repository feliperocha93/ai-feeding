import cors from "cors";
import express from "express";

import { getResponse } from "./ai/services.js";
import { pool } from "./db/client.js";
import { getCustomerInfo } from "./db/services.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/message", async (req, res) => {
  const customerInfo = await getCustomerInfo(pool, req.query.email);
  console.log(req.body);
  const response = await getResponse(customerInfo, req.body.question);
  res.send(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
