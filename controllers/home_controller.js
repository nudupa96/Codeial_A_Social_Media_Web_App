/* First Time 
to access this controller(fn part) in routes we need to set it as an
object,ie, give it a name(home) and a value(fn) and export it
this fn is actually an action that is taken for a paricular route 
And a group of actions in a file is called a controller 
module.exports.home = function(req, res){
    return res.end('<h1>Controller and Router is Setup for Codeial!</h1>');
};
//module.exports.actionName = function(req,res){};
*/
/* Second Time */
module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
};