const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller');

//for further routing,ie, /posts/post the name(1st arg in router.get) here would be that
//mentioned in posts_controller
router.get('/post', postsController.post);

console.log('Posts Router Loaded!!');
module.exports = router;