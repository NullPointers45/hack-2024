const mongoose = require("mongoose");
const farmerModel = require("../model/farmerModel");
const userModel =  require("../model/authModel");
// const transactionmodel = require("../model/transaction")
const { json } = require("express");


const createFarmer = async (req, res) => {
    try {
        const { userId ,farmName, state, city, country , cropListings} = req.body;

        // Find the user who just registered
 // Or wherever you store the userId after authentication

        // Find the user who just registered
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create farmer details using the found user
        const newFarmer = new farmerModel({
            userId: user._id,
            farmName:farmName,
            state:state,
            city:city,
            country:country,
            cropListings:cropListings,
        
            // The user schema fields are inherited
            name: user.name,
            email: user.email,
            contact: user.contact,
            password: user.password,
            role:user.role

        });

        const savedFarmer = await newFarmer.save();

        res.status(201).json({savedFarmer , message: 'Farmer posted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error saving farmer details' });
    }
};

const updateFarmer = async (req, res) => {
    try {
        const { id } = req.params;
        const { farmName, state, city, country } = req.body;

        const updatedFarmer = await Farmer.findByIdAndUpdate(
            id,
            { farmName, state, city, country },
            { new: true }
        );

        if (!updatedFarmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }

        res.status(200).json(updatedFarmer);
    } catch (error) {
        res.status(500).json({ error: 'Error updating farmer details' });
    }
};

const getFarmerById = async (req, res) => {
    try {
        const { id } = req.params;
        const farmer = await farmerModel.findById(id).populate('userId', 'name email contact');
        if (!farmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }
        res.status(200).json(farmer);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching farmer' });
    }
};

const getAllFarmers = async (req, res) => {
    try {
        const farmers = await farmerModel.find().populate('userId', 'name email contact');
        res.status(200).json(farmers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching farmers' });
    }
};

module.exports = {createFarmer,updateFarmer,getFarmerById,getAllFarmers};