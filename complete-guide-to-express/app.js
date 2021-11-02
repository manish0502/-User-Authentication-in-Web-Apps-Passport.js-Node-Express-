require('dotenv').config();
const express = require('express');
const app= express();
const PORT = process.env.PORT || 3000;
const connectDB= require('./config/db')
var logger = require('morgan')
const cors = require('cors')
const authRouter=require('./routes/auth.router')



/**---------Connect Database------------- */ 

connectDB();

/**------Some More middleware-----*/

app.use(logger('dev'))
app.use(cors({
    origin: ['http://localhost:4200'],
    credentials:true
}));



/**------------middleware--------------------- */

app.use(express.json());
app.use(express.urlencoded({extended: true}));


/** ----------Routes---------- */

app.use('/api/v1/auth', authRouter);




app.listen(PORT, ()=>{
    console.log(`Server is Running at port ${PORT}`);
})