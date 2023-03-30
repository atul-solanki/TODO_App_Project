const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Letting the middleware to use get the 'value' data from body request
app.use(express.urlencoded()) ;

// use express router
app.use('/', require('./routes'));

// Serving static files from the path defined below
app.use(express.static('./assets'));




app.listen(port, function (err) {
    if(err){
        console.log('Error', err);
    }
    console.log(`Server is running on port ::${port}`);
});