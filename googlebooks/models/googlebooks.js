const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googlebooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
    },
    link: {
        type: String
    }
})

const googlebooks = mongoose.model('googlebooks', googlebooksSchema)

module.exports = googlebooks;