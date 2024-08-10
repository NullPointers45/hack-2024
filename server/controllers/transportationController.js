const mongoose = require("mongoose");
const transportationModel = require("../model/transportationModel");
// const authModel =  require("../model/authModel");
// const transactionmodel = require("../model/transaction")
const { json } = require("express");


const createTransportation = async (req, res) => {
    try {
        const { name, email, contact, vehicleType, availability, pricing } = req.body;

        const newTransportation = new transportationModel({
            name,
            email,
            contact,
            vehicleType,
            availability,
            pricing
        });

        const savedTransportation = await newTransportation.save();
        res.status(201).json(savedTransportation);
    } catch (error) {
        res.status(500).json({ error: 'Error creating transportation' });
    }
};

const updateTransportation = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedTransportation = await Transportation.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedTransportation) {
            return res.status(404).json({ error: 'Transportation entry not found' });
        }

        res.status(200).json(updatedTransportation);
    } catch (error) {
        res.status(500).json({ error: 'Error updating transportation' });
    }
};

const getTransportationById = async (req, res) => {
    try {
        const { id } = req.params;
        const transportation = await Transportation.findById(id);

        if (!transportation) {
            return res.status(404).json({ error: 'Transportation entry not found' });
        }

        res.status(200).json(transportation);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transportation' });
    }
};

module.exports = {createTransportation,updateTransportation,getTransportationById};
