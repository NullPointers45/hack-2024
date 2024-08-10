const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    crop_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop',
        required: true
    },
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    farmer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true
    },
    bid_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid',
        required: true
    },
    transaction_amount: {
        type: Number,
        required: true
    },
    payment_status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
    escrow_status: {
        type: String,
        enum: ['Pending', 'Released', 'Held'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);