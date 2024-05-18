const express = require("express");
const router = express.Router();

// import model
const paymentformmodel = require("../models/paymentformmodel");

router.get("/paymentform", (req, res) => {
  res.render("paymentform");
});

router.post("/paymentform", async (req, res) => {
  try {
    const paymentform= new paymentformmodel(req.body);
    console.log();
   await paymentform.save();
    res.send("paymentform successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, paymentform not registered")
    console.log("Error paymentform", error)
    
  }
 
});

module.exports = router;