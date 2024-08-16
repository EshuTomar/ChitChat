const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logOut = require('../controller/logOut');
const updateUserDetails = require('../controller/updateUSerDetails');

const router = express.Router();


//user api
router.post('/register', registerUser);

//check user email
router.post('/email', checkEmail);

//check password
router.post('/password', checkPassword)

//login user details
router.get('/user-details',userDetails)

//user logout
router.get('/logout', logOut);

//update user detail
router.post('/update-user', updateUserDetails);

module.exports = router;
