// database connection

// Do not expose your credentials in your code.
//mongodb+srv://fixItGroup3:<password>@cluster0.omcrx.mongodb.net/?retryWrites=true&w=majority
//sellItGroup3

  let atlasDB= "mongodb+srv://fixItGroup3:sellItGroup3@cluster0.omcrx.mongodb.net/?retryWrites=true&w=majority";
 
// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}