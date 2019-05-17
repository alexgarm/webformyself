const mongoose = require('mongoose')
const Schema = mangoose.Schema

const orderSсhema = new Schema({

    date: {
        type: Date,
        default: Data.now,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    list: [{
        name: {
            type: String
        },
        quantity: {
            type: Number
        },
        cost: {
            type: Number
        }
    }],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId

    }

})
module.exports = mongoose.model('orders', orderSchema)