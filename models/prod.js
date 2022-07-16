// Import
// Product model schema

let mongoose = require('mongoose');

// Create a model class
let prodModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: Number,
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number        
    },
    {
        collection: "products"
    }
);

module.exports = mongoose.model('product', prodModel);