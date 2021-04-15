const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Middleware //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view //
app.use(routes);


// Start the API server & listener // 
app.listen(PORT, function () {
    console.log(`St0nks now listening on PORT:${PORT}`);
});