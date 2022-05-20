//this is actually used for further routing after /posts
//the name of the fn is post so route will be posts/post
module.exports.post = function(req, res){
    return res.end('<h1>Posts of the User!</h1><h2>Post1</h2><h2>Post2</h2>');
};