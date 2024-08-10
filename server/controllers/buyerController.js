const buyerModel = require('../model/buyerModel');

// POST /api/buyers
const createBuyer = async (req, res) => {
    try {
        const {city, state ,country, savedListings , bids,  userid} = req.body;

        const newBuyer = new buyerModel({
            userid : userid,
            city:city,
            state:state,
            country:country,
            savedListings : savedListings,
            bids: bids,
        });

        const savedBuyer = await newBuyer.save();
        res.status(201).json(savedBuyer);
    } catch (error) {
        res.status(500).json({ error: 'Error creating buyer' });
    }
};

// PUT /api/buyers/:id
const updateBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedBuyer = await buyerModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedBuyer) {
            return res.status(404).json({ error: 'Buyer not found' });
        }

        res.status(200).json(updatedBuyer);
    } catch (error) {
        res.status(500).json({ error: 'Error updating buyer' });
    }
};

const getBuyerById = async (req, res) => {
    try {
        const { id } = req.params;
        const buyer = await buyerModel.findById(id).populate('bids');

        if (!buyer) {
            return res.status(404).json({ error: 'Buyer not found' });
        }

        res.status(200).json(buyer);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching buyer' });
    }
};

module.exports = {createBuyer,updateBuyer,getBuyerById};
