require('dotenv').config();
const express = require('express');
const app= express();
const PORT = process.env.PORT || 3000;
const connectDB= require('./config/db')
var logger = require('morgan')
const cors = require('cors')
const session = require('express-session'); 
const authRouter=require('./routes/auth.router')
const connection= require('./config/db')
const MongoDbStore = require('connect-mongo')(session);




/**---------Connect Database------------- */ 

//connectDB();

connection




/**------Some More middleware-----*/

app.use(logger('dev'))
app.use(cors({
    origin: ['http://localhost:4200'],
    credentials:true
}));



/**------------middleware--------------------- */

app.use(express.json());
app.use(express.urlencoded({extended: true}));


/*********************** Session Store********************************/

let sessionStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})



/*********************** Configration for Sessions ********************************/

app.use(session({

    secret:process.env.SECRET_KEY,
    resave: false,
    saveUninitialized:true,
    store: sessionStore,
    cookie:{
         maxAge: 1000 * 60 * 60 * 24 
    }

}))



/** ----------Routes---------- */

app.use('/api/v1/auth', authRouter);




app.listen(PORT, ()=>{
    console.log(`Server is Running at port ${PORT}`);
})