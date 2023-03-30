// require the library
const mongoose = require('mongoose');

main().catch(err => console.log(err));

// connecting to database
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to_do_list_db');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error handling 
db.on('error',console.error.bind(console,"Error on connection"))

// up and running then print the message
db.once('open',function(){
    console.log("successfully connected to database")
})

module.exports = db;