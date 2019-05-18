const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySсhema = new Schema({

    name: {
        type: String,
        required: true
    },
    imageScr: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId

    }

})
module.exports = mongoose.model('categories', categorySchema)