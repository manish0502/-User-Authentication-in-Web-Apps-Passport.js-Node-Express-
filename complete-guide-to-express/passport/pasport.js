const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

function init(passport) {

    const customFields = { usernameField: 'email' }

    const verifyCallback =  async (email, password, done) => {

        // Login
        // check if email exists
        const user = await User.findOne({ email: email })
        if(!user) {
            return done(null, false, { message: 'No user with this email' })
        }

        bcrypt.compare(password, user.password).then(match => {

            if(match) {
                return done(null, user, { message: 'Logged in succesfully' })
            }
            return done(null, false, { message: 'Wrong username or password' })

        }).catch(err => {
            return done(null, false, { message: 'Something went wrong' })
        })
    }


    const strategy = new LocalStrategy(customFields,verifyCallback)
    
    passport.use('local',strategy)

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

}

module.exports = init ;