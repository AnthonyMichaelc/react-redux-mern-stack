const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
// initial express
const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// mongodb uri
// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    } else {
        console.log('Connected to database: ' + config.db);
    }
});

// Use routes
app.use('/api/items', items);

const port = process.env.Port || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));