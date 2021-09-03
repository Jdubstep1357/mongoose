const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    }, 
}, {
    //allows mongoose to take care of automated timestamps (logging time of using and such)
    timestamps: true
});

//2 arguments, first argument for schema, and other is for 2 other timestamps create app and update app
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);
//Campsite refers back to Campsites, campsiteSchema refers back to schema
//2nd arguent is schema, 1st argument is for const
module.exports = Campsite;