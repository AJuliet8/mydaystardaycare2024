const express = require("express");
const router = express.Router();

// import model
const sitterregmodels = require("../models/parentsformmodel");

router.get("/parentsform", (req, res) => {
  res.render("parentsform");
});

router.post("/parentsform", async (req, res) => {
  try {
    const parentsform = new parentsformmodel(req.body);
    console.log(parentsform);
   await sitter.save();
   res.redirect("/dashboard");
  } catch (error) {
    res.status(400).send("Sorry, error occurred, parentsform not registered")
    console.log("Error parentsform", error)
    
  }
 
});