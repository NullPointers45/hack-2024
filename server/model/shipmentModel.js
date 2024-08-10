const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    transaction_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    shippername: {
        type: String,
        required: true
    },
    shipper_contact: {
        type: String,
        required: true
    },
    shipping_cost: {
        type: Number,
        required: true
    },
    delivery_status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered', 'Failed'],
        default: 'Pending'
    },
    estimated_deliverydate: {
        type: Date,
        required: true
    },
    actual_deliverydate: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model('Shipment', transportSchema);