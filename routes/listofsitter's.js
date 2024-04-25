const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/listofsitter's");

router.get("/listofsitter's", (req, res) => {
  res.render("listofsitter's");
});

router.post("/listofitter's", async (req, res) => {
  try {
    const baby = new listofssitter(req.body);
    console.log();
   await baby.save();
    res.send("listofsitter'ssuccessfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, sitter'sreg not registered")
    console.log("Error listofssitter's", error)
    
  }
 
});

module.exports = router;