const express = require("express");
const croprouter = express.Router();

const {createCrop,updateCrop,getCropById,getCropsByFarmer,deleteCrop,getAllCrops} =require("../controllers/cropController")

croprouter.get("/",getAllCrops);
croprouter.post("/",createCrop);
croprouter.get("/:id",updateCrop);
croprouter.put("/:id",getCropById);
croprouter.delete("/:id",deleteCrop);



module.exports=croprouter;