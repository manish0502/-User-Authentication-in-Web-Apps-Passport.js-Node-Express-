require('dotenv').config();
const express = require('express');
const app= express();
var logger = require('morgan')
const cors = require('cors')
const dbConnection = require('./config/db')

const PORT = process.env.PORT || 3000;


dbConnection

app.get('/', (req, res) =>{
    res.json({
        msg:"Hello from App.js",
        status: 200,
    })
})



app.listen(PORT, ()=>{
    console.log(`Server is Running at port ${PORT}`);
})