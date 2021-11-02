process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DB_STRING


const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}   

const connection = mongoose.createConnection(url, dbOptions,
    
    (err, db) => {
        
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
        } else {
            console.log('MongoDB Connected to Express Server successfully!...');
        }
});

module.exports = connection;


// const connectDB = async ()=>{
//     try{
//         await mongoose.createConnection(url,
//             { 
//                 useUnifiedTopology: true ,
//                 useNewUrlParser: true 
//             });
//         console.log('MongoDB Connected .....')

//     }catch(err){

        
//         console.error(err.message);

//         //Exit process with Failure
//         process.exit(1);

//     }
// }

//module.exports = connectDB;




