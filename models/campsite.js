const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);
//Campsite refers back to Campsites, campsiteSchema refers back to schema
//2nd arguent is schema, 1st argument is for const
module.exports = Campsite;