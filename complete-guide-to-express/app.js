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
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session);
var passport = require('passport');




/**---------Connect Database------------- */ 

//connectDB();

connection






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


/*********************** Passport Configration ************************************/


const passportInit = require('./passport/pasport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())


/*********************** Using Flash as middleware ********************************/

app.use(flash());

/*********************** Other middleware ********************************/

app.use(logger('dev'))
app.use(cors({
    origin: ['http://localhost:4200'],
    credentials:true
}));



/**------------middleware--------------------- */

app.use(express.json());
app.use(express.urlencoded({extended: true}));



/*********************** Setup Global Middleware ********************************/

app.use((req, res, next)=>{
    res.locals.session = req.session;
    res.locals.user = req.user
    next();
})

/** ----------Routes---------- */

app.use('/api/v1/auth', authRouter);




app.listen(PORT, ()=>{
    console.log(`Server is Running at port ${PORT}`);
})