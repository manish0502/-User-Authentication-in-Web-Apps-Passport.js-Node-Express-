const express = require('express')
const router = express.Router()
const passport = require("passport");
const User = require("../models/User.model")
const Job = require("../models/Job.model")



router.get('/profile', async (req, res, next) => {

  const jobs = await Job.find({ createdBy: req.user }).sort("createdAt");

    res.json({
        msg:"Hello from profile",
        user: jobs

    });
  });

module.exports = router
