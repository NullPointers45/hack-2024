const mongoose = require("mongoose");
const User = require('./user');

const buyerSchema = User.discriminator('Buyer', new mongoose.Schema({
    savedListings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Crop',
    }],
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid',
    }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
  }, { timestamps: true }));
  
  module.exports = mongoose.model('Buyer', buyerSchema);