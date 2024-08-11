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
  status:{
    type:String,
        enum:['Active','Expired','Completed'],
        required: true
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  farmerId: {
    type: String,
    // ref: 'Farmer',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Crop', cropSchema);
