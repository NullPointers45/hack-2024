const mongoose = require("mongoose");
const User = require('./user');  // Assuming the base schema is in 'user.js'

const farmerSchema = User.discriminator('Farmer', new mongoose.Schema({
    farmName: {
      type: String,
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
    cropListings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Crop',
    }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }, { timestamps: true }));
  
  module.exports = mongoose.model('Farmer', farmerSchema);
