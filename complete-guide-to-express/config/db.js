process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DB_STRING




const connectDB = async ()=>{
    try{
        await mongoose.connect(url,
            { 
                useUnifiedTopology: true ,
                useNewUrlParser: true 
            });
        console.log('MongoDB Connected .....')

    }catch(err){

        
        console.error(err.message);

        //Exit process with Failure
        process.exit(1);

    }
}
// const connection = mongoose.createConnection(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


// const DB = mongoose.createConnection(url, {

//        useNewUrlParser: true,
//        useUnifiedTopology: true
//      });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Connection failed...')
    
// });


module.exports = connectDB;


