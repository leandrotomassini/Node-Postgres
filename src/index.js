const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('./routes/index'));

app.listen();

console.log('Server on port 3000');