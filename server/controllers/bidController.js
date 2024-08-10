const Bid = require("../models/bid");
const Buyer = require("../models/buyer");
const Crop = require("../models/crop");

// POST /api/bids
const createBid = async (req, res) => {
    try {
        const { buyerId, cropId, bidAmount } = req.body;

        // Validate crop existence
        const crop = await Crop.findById(cropId);
        if (!crop) {
            return res.status(404).json({ error: "Crop not found" });
        }

        // Validate buyer existence
        const buyer = await Buyer.findById(buyerId);
        if (!buyer) {
            return res.status(404).json({ error: "Buyer not found" });
        }

        // Create new bid
        const newBid = new Bid({
            buyerId,
            cropId,
            bidAmount
        });

        const savedBid = await newBid.save();

        // Add the bid to the buyer's bids array
        buyer.bids.push(savedBid._id);
        await buyer.save();

        res.status(201).json(savedBid);
    } catch (error) {
        res.status(500).json({ error: "Error creating bid" });
    }
};


// GET /api/buyers/:id/bids
const getBidsByBuyer = async (req, res) => {
    try {
        const { id } = req.params;

        const buyer = await Buyer.findById(id).populate({
            path: "bids",
            populate: {
                path: "cropId",
                select: "cropType variety"
            }
        });

        if (!buyer) {
            return res.status(404).json({ error: "Buyer not found" });
        }

        res.status(200).json(buyer.bids);
    } catch (error) {
        res.status(500).json({ error: "Error fetching bids" });
    }
};
module.exports = {createBid,getBidsByBuyer};
