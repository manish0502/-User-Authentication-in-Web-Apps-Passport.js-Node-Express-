require('dotenv').config();
const User = require('../models/User.model');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties

var options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  //algorithms: ['RS256']
};

var verifyCallback = (jwt_payload, done) => {

    console.log(jwt_payload);
    
    // We will assign the `sub` property on the JWT to the database ID of user

     User.findOne({_id: jwt_payload.userId}, (err, user) => {
        
        // This flow look familiar?  It is the same as when we implemented
        // the `passport-local` strategy

        if (err) {
            return done(err, false , { message: 'Something went Wrong' });
        }
        if (user) {
            return done(null, user ,{ message: 'User Found' });
        } else {
            return done(null, false , { message: 'No User Found' });
        }
        
    });
    
}

// app.js will pass the global passport object here, and this function will configure it

  module.exports = (passport) => {

    // The JWT payload is passed into the verify callback
    const strategy = new JwtStrategy(options, verifyCallback)

    passport.use('jwt', strategy);
}


