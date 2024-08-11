const express = require("express");
const buyerrouter = express.Router();

const {createBuyer,updateBuyer,getBuyerById} =require("../controllers/buyerController")

// farmerrouter.get("/",getAllFarmers);
buyerrouter.post("/",createBuyer);
// farmerrouter.get("/:id",updateFarmer);
// farmerrouter.put("/:id",getFarmerById);

module.exports=buyerrouter;