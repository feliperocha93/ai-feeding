import cors from "cors";
import express from "express";

import { getResponse } from "./ai/services.js";
import { pool } from "./db/client.js";
import { getCustomerInfo } from "./db/services.js";
import history from "./history.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.post("/support", async (req, res) => {
  const { email, message } = req.body;
  history.add(email, "user", message);

  const customerInfo = await getCustomerInfo(pool, email);
  const response = await getResponse(customerInfo, history.get(email));
  history.add(email, "model", response);

  res.send({ response });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
