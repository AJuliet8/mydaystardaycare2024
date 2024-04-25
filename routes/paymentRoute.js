const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/payment route");

router.get("/payment", (req, res) => {
  res.render("payment");
});

router.post("/payment", async (req, res) => {
  try {
    const baby = new sittersroute(req.body);
    console.log();
   await baby.save();
    res.send("payment successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, payment not registered")
    console.log("Error payment", error)
    
  }
 
});

module.exports = router;