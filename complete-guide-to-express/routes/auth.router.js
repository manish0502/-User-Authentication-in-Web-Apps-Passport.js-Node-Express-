const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  protectedRoute,
  simple,
  redirectRegister,
  registerForm,
  loginForm,
  loginSuccess,
  loginFailure,
} = require("../controllers/auth.controllers");

router.route("/").get(redirectRegister);

router.route("/register").post(register).get(registerForm);

router.route("/login").post(login).get(loginForm);

router.route("/logout").get(logout);

router.route("/protected-route").get(protectedRoute)

router.route("/simple").get(simple);

router.route("/login-success").get(loginSuccess);

router.route("/login-failure").get(loginFailure);

module.exports = router;
