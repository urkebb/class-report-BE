const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const mongoose = require('mongoose');

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/api', router());

app.use('*', (req, res) => {

    res.status(404).json({
        success: 'false',
        message: 'Page not found',
        error: {
            statusCode: 404,
            message: 'You reached a route that is not defined on this server'
        }
    });

});

mongoose.connect(
    process.env.CONNECTION_STRING
).then(() => {

    app.listen(process.env.PORT);
    console.log('Mongoose connected');

}).catch(err => console.log(err));
