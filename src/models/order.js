const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    product: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'products',
           required: true
        }],
    customer: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customers',
            required: true
        }],
    Status: {
            type: String,
            default: "Pendente"
        }
    }
)

const Model = mongoose.model('order', schema)

module.exports = Model