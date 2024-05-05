const express = require("express");
const router = express.Router();

// import model
const dashboardmodels = require("../models/newdollshopmodel");

router.get("/newdollshop", (req, res) => {
  res.render("newdollshop");
});

router.post("/newdollshop", async (req, res) => {
  try {
    const newdollhopRoute= new newdollshopRoute(req.body);
    console.log();
   await newdollshop.save();
    res.send("newdollsshop successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, newdollshop not registered")
    console.log("Error newdollshop", error)
    
  }
 
});

module.exports = router;