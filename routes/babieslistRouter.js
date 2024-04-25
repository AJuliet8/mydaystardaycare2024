const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/babieslist");

router.get("/babieslist", (req, res) => {
  res.render("babieslist");
});

router.post("/babieslist", async (req, res) => {
  try {
    const baby = new babieslist(req.body);
    console.log();
   await babylist.save();
    res.send("Babieslist successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, babies list not registered")
    console.log("Error babieslist", error)
    
  }
 
});

module.exports = router;