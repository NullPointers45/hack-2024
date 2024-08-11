const express = require("express");
const bidrouter = express.Router();

const {createBid,getBidsByBuyer} =require("../controllers/bidController")

bidrouter.get("/",createBid);
// croprouter.post("/",createCrop);
// croprouter.get("/:id",updateCrop);
// croprouter.put("/:id",getCropById);
// croprouter.delete("/:id",deleteCrop);



module.exports=bidrouter;