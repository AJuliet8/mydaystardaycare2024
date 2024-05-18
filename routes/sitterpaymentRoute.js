const express = require("express");
const router = express.Router();

// import model
const dashboardmodels = require("../models/sitterpaymentmodel");

router.get("/sitterpayment", (req, res) => {
  res.render("sitterpayment");
});

router.post("/sitterpayment", async (req, res) => {
  try {
    const sitterpaymentRoute= new sitterpaymentRoute(req.body);
    console.log();
   await newdollshop.save();
    res.send("sitterpayment successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, sitterpayment not registered")
    console.log("Error sitterpayment", error)
    
  }
 
});

module.exports = router;