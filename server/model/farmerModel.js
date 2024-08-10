const mongoose = require("mongoose");
const User = require("./authModel"); // Assuming the base User model is in 'authModel.js'

// Define the Farmer schema as a discriminator of the User schema
const farmerSchema = new mongoose.Schema({
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
    // type: String,
    // required: true
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

// Create the Farmer model using the discriminator
const Farmer = User.discriminator('Farmer', farmerSchema);

module.exports = Farmer;
