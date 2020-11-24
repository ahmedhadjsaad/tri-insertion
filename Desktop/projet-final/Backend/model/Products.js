const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    Category :String,
    Name : String,
    Image : String,
    Prix : Number,
    Rating : Number,
    Qtn : Number,
    Date : {
        type:Date,
        default:Date.now
    }

})
module.exports = Products = mongoose.model('Products', ProductsSchema);
