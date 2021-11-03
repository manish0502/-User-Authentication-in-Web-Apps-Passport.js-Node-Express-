const User = require("../models/user.model");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middleware/async");

/** visit to http://localhost:5000/api/v1/auth/register and you will see the register option */

/**Alter method of Register */

// const register = asyncWrapper( async (req, res, next) => {
//     const { name ,email, password } = req.body;
//     if (!name || !email || !password) {
//         res.json({
//             msg: "Something is Missing either Name, Email and password",
//             status: StatusCodes.BAD_REQUEST,

//         })
//       }
//     User.exists({ email: email }, (err, result) => {
//         if (result) {
//           return res.json({
//               msg: `User is Already Exist with Email ${email}`,
//               status: StatusCodes.FOUND,
//           });
//         }
//       });
//       const hashPassword = await bcrypt.hash(password, 10);
//       const newuser = new User({
//         name,
//         email,
//         password: hashPassword,
//       });
//       const user = await User.create(newuser)
//         res.status(StatusCodes.CREATED).json({
//             msg: "User has been successfully created",
//             status: StatusCodes.CREATED,
//             user: { name: user.name }
//         });
// })

const register = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({
    msg: "User has been successfully created",
    status: StatusCodes.CREATED,
    user: { name: user.name },
  });
});
/** visit to http://localhost:5000/api/v1/auth/login and you will see the login option */

const login = (req, res, next) => {
  res.json({
    msg: "This is Login from controllers",
    status: 200,
  });
};

/** visit to http://localhost:5000/api/v1/auth/simple and you will see the response */

const simple = (req, res, next) => {
  res.json({
    msg: "This is get request from controllers",
    status: 200,
  });
};

/** visit to http://localhost:5000/api/v1/auth/ and you will see the link for the  register */

const redirectRegister = (req, res, next) => {
  res.send(
    '<h1>Home</h1><p>Please <a href="/api/v1/auth/register">register</a></p>'
  );
};

/** visit to http://localhost:5000/api/v1/auth/register and you will see the register page */

const registerForm = (req, res, next) => {
  const form =
    '<h1>Register Page</h1><form method="POST" action="register">\
                    Enter Username:<br><input type="text" name="name">\
                    <br>Enter Email:<br><input type="email" name="email">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

  res.send(form);
};

/** visit to http://localhost:5000/api/v1/auth/login and you will see the login page */

const loginForm = (req, res, next) => {
  const form =
    '<h1>Login Page</h1><form method="POST" action="login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

  res.send(form);
};

/** visit to http://localhost:5000/api/v1/auth/login-success and you will see the following request */

const loginSuccess = (req, res, next) => {
  res.send(
    '<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>'
  );
};

/** visit to http://localhost:5000/api/v1/auth/login-failure and you will see the following request */

const loginFailure = (req, res, next) => {
  res.send("You entered the wrong password.");
};

module.exports = {
  register,
  login,
  simple,
  redirectRegister,
  registerForm,
  loginForm,
  loginSuccess,
  loginFailure,
};
