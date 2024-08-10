const mongoose = require("mongoose");
const cropSchema = new mongoose.Schema({
    cropType: {
      type: String,
      required: true,
    },
    variety: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    priceExpectation: {
      type: Number,
    },
    harvestDate: {
      type: Date,
      required: true,
    },
    deliveryWindow: {
      type: String,
      required: true,
    },
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Farmer',
      required: true,
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Crop', cropSchema);
  