const cropModel = require('../model/cropModel');
const userModel = require('../model/authModel');
const farmerModel = require('../model/farmerModel');
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;
const createCrop = async (req, res) => {
    try {
        const {userId, cropType, variety, description, quantity, priceExpectation, harvestDate, startDate, endDate, farmerId, status } = req.body;

        // Create a new crop
        const newCrop = new cropModel({
            cropType,
            variety,
            description,
            quantity,
            priceExpectation,
            harvestDate,
            status,
            startDate,
            endDate,
            farmerId: userId,
        });

        // Save the crop to the Crop collection
        const savedCrop = await newCrop.save();

        // Find the farmer and update the cropListings array
        const farmer = await userModel.findById(userId);
        if (!farmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }

        // Initialize cropListings array if undefined
        if (!farmer.cropListings) {
            farmer.cropListings = [];
        }

        // Add the saved crop's ID to the farmer's cropListings array
        farmer.cropListings.push(savedCrop._id);
        await farmer.save();

        res.status(201).json({ crop: savedCrop, message: 'Crop added and farmer updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding crop' });
    }
};

const updateCrop = async (req, res) => {
    try {
        const { cropId } = req.params;  // Crop ID from the URL
        const updateData = req.body;    // Data to update

        const updatedCrop = await cropModel.findByIdAndUpdate(cropId, updateData, { new: true });

        if (!updatedCrop) {
            return res.status(404).json({ error: 'Crop not found' });
        }

        res.status(200).json({ crop: updatedCrop, message: 'Crop updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error updating crop' });
    }
};

// GET /api/crops/:id
const getCropById = async (req, res) => {
    try {
        const { cropId } = req.params;  // Crop ID from the URL

        const crop = await cropModel.findById(cropId).populate('farmerId', 'name email contact');

        if (!crop) {
            return res.status(404).json({ error: 'Crop not found' });
        }

        res.status(200).json({ crop });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving crop' });
    }
};

const getAllCrops = async (req, res) => {
    try {
        const crops = await cropModel.find().populate('farmerId', 'name email contact');

        if (crops.length === 0) {
            return res.status(404).json({ message: 'No crops found' });
        }

        res.status(200).json({ crops });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving crops' });
    }
};
// GET /api/crops/farmer/:farmerId
const getCropsByFarmer = async (req, res) => {
    try {
        const { farmerId } = req.params;
        const crops = await cropModel.find({ farmerId }).populate('farmerId', 'name email contact');

        if (crops.length === 0) {
            return res.status(404).json({ error: 'No crops found for this farmer' });
        }

        res.status(200).json(crops);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching crops' });
    }
};

const deleteCrop = async (req, res) => {
    try {
        const { cropId } = req.params;  // Crop ID from the URL

        const deletedCrop = await Crop.findByIdAndDelete(cropId);

        if (!deletedCrop) {
            return res.status(404).json({ error: 'Crop not found' });
        }

        // Remove the crop reference from the farmer's cropListings array
        await farmerModel.findByIdAndUpdate(deletedCrop.farmerId, {
            $pull: { cropListings: cropId }
        });

        res.status(200).json({ message: 'Crop deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting crop' });
    }
};

module.exports = {createCrop,updateCrop,getCropById,getCropsByFarmer,deleteCrop,getAllCrops};


