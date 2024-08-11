const buyerModel = require('../model/buyerModel');
const userModel = require("../model/authModel"); 
// POST /api/buyers
const createBuyer = async (req, res) => {
    try {
        const {userId,city, state ,country, savedListings , bids,  userid} = req.body;
        
        const user = await userModel.findById(userId);
        // const userId = req.user._id; // Or wherever you store the userId after authentication

        // Find the user who just registered
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const newBuyer = new buyerModel({
            userId: user._id,
            name : user.name,
            email:user.email,
            name: user.name,
            email: user.email,
            contact: user.contact,
            password: user.password,
            city:city,
            state:state,
            country:country,
            role:user.role,
            savedListings: savedListings || [],  // Default to empty array if not provided
            bids: bids || [],
        });

        const savedBuyer = await newBuyer.save();
        res.status(201).json({buyer : savedBuyer , message: 'Buyer posted successfullu=y'});
    } catch (error) {
        console.log(error);
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
