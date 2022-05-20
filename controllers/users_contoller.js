//here I need to export an action
module.exports.profile = function(req, res){
    res.end('<h1>User Profile Page</h1>');
};

module.exports.post = function(req, res){
    res.end('<h1>Posts of the Great User!!</h1><h2>Posttt1</h2><h2>Posttt2</h2>');
};