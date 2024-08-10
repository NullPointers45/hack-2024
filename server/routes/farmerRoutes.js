const express = require("express");
const farmerrouter = express.Router();

const {createFarmer,updateFarmer,getFarmerById,getAllFarmers} =require("../controllers/farmerController")

farmerrouter.get("/",getAllFarmers);
farmerrouter.post("/",createFarmer);
farmerrouter.get("/:id",updateFarmer);
farmerrouter.put("/:id",getFarmerById);

module.exports=farmerrouter;