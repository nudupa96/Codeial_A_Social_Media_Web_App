const express = require('express');
const app = express();
const port = 8000;
//import the express-ejs-layouts lib
const expressLayouts = require('express-ejs-layouts');

//link the db 
const db = require('./config/mongoose');

//link the static files folder called assets
app.use(express.static('./assets'));

//need to use ejs layouts lib before routes  is required
app.use(expressLayouts);

//extract styles and scripts from sub pages into thr layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//now we need to tell the app to use the routes folder,ie,
//all the get,post etc will be handled by this module - This is a MW
app.use('/', require('./routes'));//arg1-for any further urls,arg2- route the routes to index.js of routes

//Setup the view engine (name and value pair)
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});