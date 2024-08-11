// models/Bid.js
const mongoose = require('mongoose');


const bidSchema = new mongoose.Schema({
    cropId: {
        type: String,
        required: true,
        ref: 'Crop' // Assuming you have a Crop model
    },
    buyerId: {
        type: String,
        required: true,
        ref: 'Buyer'
    },
    bidAmount: {
        type: Number,
        required: true
    },
    bidStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        required: true
    }
});

module.exports = mongoose.model('Bid', bidSchema);