const {mongoose} = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
})

const Model = mongoose.model('customer', schema)

module.exports = Model