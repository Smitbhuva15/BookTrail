const express = require('express');
const { userData, loginData } = require('../controller/userData');
const { authcontrol } = require('../controller/Authcontrol');
const { AuthMiddelware } = require('../middleware/AuthMiddelware');

const userRoutes = express.Router();  

userRoutes.post('/user/signup', userData);
userRoutes.post('/user/login',loginData)
userRoutes.get('/Api/user',AuthMiddelware ,authcontrol)

exports.userRoutes = userRoutes;
