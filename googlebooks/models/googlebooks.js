const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googlebooks = new Schema({
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