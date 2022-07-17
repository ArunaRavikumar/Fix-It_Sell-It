// Import
// Product model schema

let mongoose = require('mongoose');

// Create a model class
let prodModel = mongoose.Schema(
    {
        productname: String,
        productdescription: String,
        condition: String,
        color: String,
        sellername:String,
        price: Number        
    },
    {

        collection: "Products"
    }
);

module.exports = mongoose.model('Products', prodModel);
    {
        collection: "products"
    }


