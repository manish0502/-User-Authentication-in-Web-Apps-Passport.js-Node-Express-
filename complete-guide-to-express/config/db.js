process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DB_STRING


const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }   


const connection = mongoose.connect(url, dbOptions,
    
    (err, db) => {
        
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
        } else {
            console.log('MongoDB Connected to Express Server successfully!...');
        }
});

module.exports = connection;

