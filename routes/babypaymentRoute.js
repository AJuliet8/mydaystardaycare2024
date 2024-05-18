const express = require("express");
const router = express.Router();

// import model
const babypaymentmodels = require("../models/babypaymentmodel");

router.get("/babypayment", (req, res) => {
  res.render("babypayment");
});

router.post("/babypayment", async (req, res) => {
  try {
    const babypaymentRoute= new babypaymentRoute(req.body);
    console.log();
   await newdollshop.save();
    res.send("babypayment successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, babypayment not registered")
    console.log("Error babypayment", error)
    
  }
 
});

module.exports = router;