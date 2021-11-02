const User = require('../models/user.model')


const register =(req, res, next) => {
    res.json({
        msg:"This is from controllers",
        status:200
    })
}


const login =(req, res, next) => {
    res.json({
        msg:"This is Login from controllers",
        status:200
    })
}

const simple =(req, res, next) => {
    res.json({
        msg:"This is get request from controllers",
        status:200
    })
}



module.exports = {
    register,
    login,
    simple
  }
