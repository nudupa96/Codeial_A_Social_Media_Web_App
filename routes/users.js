const express = require('express');
const router = express.Router();

//require the usersController or access it
const usersController = require('../controllers/users_contoller');

router.get('/profile', usersController.profile);//map a route called users/profile to this action

router.get('/post', usersController.post);//map a route called users/post to this action

console.log('Users Router Loaded!');
//and make it accessible outside this file
module.exports = router;