const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/indexroute");

router.get("/index", (req, res) => {
  res.render("index");
});

router.post("/index", async (req, res) => {
  try {
    const baby = new sittersroute(req.body);
    console.log();
   await baby.save();
    res.send("index successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, index not registered")
    console.log("Error index", error)
    
  }
 
});

module.exports = router;