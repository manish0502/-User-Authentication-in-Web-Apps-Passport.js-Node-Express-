const express = require("express");
const router = express.Router();

const { protectedRoute } = require("../controllers/auth.controllers");

router.route("/protected-route").get(protectedRoute)


module.exports = router;