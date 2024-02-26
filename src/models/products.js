const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    price: Number
})

const Model = mongoose.model('product', schema)

module.exports = Model