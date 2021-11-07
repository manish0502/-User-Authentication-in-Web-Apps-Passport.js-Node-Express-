const { StatusCodes } = require('http-status-codes')

const register = (req, res ,next) => {
 
    res.json({
        
        msg:"User has been registered",
        status:StatusCodes.CREATED
    })
 
}

const login =  (req, res ,next) => {

    res.json({
        msg:"User is logged in",
        status:StatusCodes.OK
    })

}

module.exports = {
  register,
  login
}
