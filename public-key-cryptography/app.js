require('dotenv').config();
var logger = require('morgan')
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');


//const authenticateUser = require('./middleware/authentication');

// routers

const authRouter = require('./routes/auth');
//const jobsRouter = require('./routes/job.router');


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



connectDB()


app.use(logger('dev'));
app.use(express.json());
app.use(cors());




// routes

 app.use('/api/v1/auth', authRouter);
 //app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});