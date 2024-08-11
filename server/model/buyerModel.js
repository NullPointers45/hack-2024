const mongoose = require("mongoose");
const User = require('./authModel'); // Base schema

// Define the Buyer schema as a discriminator of the User schema
const buyerSchema = new mongoose.Schema({
    savedListings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop',
    }],
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid',
    }],
    role: {
      type: String,
      default: 'Buyer',
      required: true
    },
    userId: {
        type: String,
        // ref: 'User',
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
}, { timestamps: true });

// Create the Buyer model using the discriminator
const Buyer = User.discriminator('Buyer', buyerSchema);

module.exports = Buyer;
