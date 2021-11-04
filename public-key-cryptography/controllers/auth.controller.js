const User = require('../models/User.model')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const asyncWrapper = require("../middleware/async");

const register = asyncWrapper( async (req, res) => {
  const user = await User.create(req.body)
  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({
    msg: "User has been successfully created",
    status: StatusCodes.CREATED,
    user: { name: user.name },
    token,
  });
 
})

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
})

module.exports = {
  register,
  login,
}
