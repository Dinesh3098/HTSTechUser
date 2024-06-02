// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import required modules
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors")
const PORT = process.env.PORT || 3000
const connectToDB = require("./libs/mongoose"); // Custom module to connect to MongoDB
const router = require("./routes");

// Create an Express application
const app = express()

// Middleware to parse URL-encoded data with the querystring library
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors())

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use("/app", router);

// Connect to the MongoDB database
connectToDB();

// Start the server and listen on the specified port
app.listen(PORT,()=>{
    console.log(`Server is up and running on port no. ${PORT} 🚀`)
})