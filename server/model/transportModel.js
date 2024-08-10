const mongoose = require("mongoose");
const User = require('./user');

const transportSchema = User.discriminator('Transport', new mongoose.Schema({
    transportationCompany: {
      type: String,
      required: true,
    },
    shipments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment',
        required: true,
    }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }, { timestamps: true }));
  
  module.exports = mongoose.model('Transport', transportSchema);