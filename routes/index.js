//this is the entry point to all the routes
const express = require('express');

const router = express.Router();//create the router var by calling the .Router() function
//Inorder to access the controller through this(my index.js routes file)
const homeController = require('../controllers/home_controller');
//Similar to app.get , app.post etc, we need to access the home_controller's action
router.get('/', homeController.home);//.home is the var name given in controller

console.log('Router loaded');//to give a message(note: everytime thsi file is changed, server restarts)

//to make it available to main index.js we need to export it
module.exports = router;
