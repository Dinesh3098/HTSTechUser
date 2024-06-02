const express = require('express')
const { signupUser, login } = require('./../controllers/user')
const router = express.Router()

router.route('/signup').post(signupUser)
router.route('/login').post(login)

module.exports = router