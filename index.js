const express = require('express');
const app = express();
const port = 8000;

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