// Importing the required libraries
const express = require("express"); // Express framework for building web applications
const app = express(); // Creating an instance of an Express application
const bodyParser = require('body-parser'); // Middleware for parsing incoming request bodies
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing
const runQuery = require("./bigQuery"); // Importing the function that will run BigQuery SQL queries
require('dotenv').config(); // Loading environment variables from a .env file

// Middleware setup
app.use(bodyParser.json()); // Configuring the app to parse JSON data from incoming requests
app.use(cors()); // Enabling CORS to allow requests from other domains (like your React app)

// Setting up a POST route to handle incoming queries
app.post("/query", async (req, res) => {
  const query = req.body.query; // Extracting the SQL query from the request body
  const result = await runQuery(query); // Running the SQL query using the imported function
  res.json(result); // Sending back the result as a JSON response
});

// Setting the port for the server to listen on
const port = process.env.PORT || 3002; // Using an environment variable for the port, or defaulting to 3002
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Logging a message to the console when the server starts
});
