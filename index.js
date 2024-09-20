const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const runQuery = require("./bigQuery");
require('dotenv').config();
app.use(bodyParser.json());

app.use(cors());
app.post("/query", async (req, res) => {
  const query =req.body.query;
  const result = await runQuery(query);
  res.json(result);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
