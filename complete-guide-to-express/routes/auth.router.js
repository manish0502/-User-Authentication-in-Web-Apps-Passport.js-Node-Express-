const express = require('express')
const router = express.Router()

const {
    register,
    login ,
    simple
     } = require('../controllers/auth.controllers');


router.route('/register')
            .post(register)

router.route('/login')
            .post(login)

router.route('/simple')
            .get(simple)



module.exports = router