const express = require('express');
const registerUser = require('../controller/registerUser');

const router = express.Router();

//user api
router.post('/register', registerUser);

module.exports = router;