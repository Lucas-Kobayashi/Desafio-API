const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    productId: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'products'
        }],
    customerId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
        }],
    })