//this is the entry point to all the routes
const express = require('express');

const router = express.Router();//create the router var by calling the .Router() function
//Inorder to access the controller through this(my index.js routes file)
const homeController = require('../controllers/home_controller');
//Similar to app.get , app.post etc, we need to access the home_controller's action
router.get('/', homeController.home);//.home is the var name given in controller
/*now to access all other routes through this main routes file index.js
if any req for / comes then take to homeController
if any req comes for /users then take to ./users of this routes folder */
router.use('/users', require('./users')); //handles all /users requests

//for any further routes, access from here 
//router.use('/routerName', require('./routerfile'));

//router for posts 
router.use('/posts', require('./posts'));

console.log('Main Router loaded');//to give a message(note: everytime thsi file is changed, server restarts)

//to make it available to main index.js we need to export it
module.exports = router;
