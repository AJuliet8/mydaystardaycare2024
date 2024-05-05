const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../models/babiesregistration");
const babiesregistration = require("../models/babiesregistration");

router.get("/babiesreg", (req, res) => {
  res.render("babiesregistration");
});

router.post("/babiesreg", async (req, res) => {
  try {
    const baby = new babiesregistration(req.body);
    console.log();
   await baby.save();
    res.redirect("/babieslist")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, baby not registered")
    console.log("Error babiesregistration", error)
    
  }
 
});


// fetching babieslist from database
router.get("/babieslist", async(req,res)=>{
  try{
    let babies =await  babiesregistration.find()
    res.render("babytable",{babies:babies}) // to display babies from data base
  }catch(error){
    res.status(400).send("unable to find babies from database")
    console.log("unable to find babies from database")
  }

})

// delete route for form in database
router.post("/delete", async(req,res)=>{
  try{
    await babiesregistration.deleteOne({_id:req.body.id});
    res.redirect("back");
  }catch (error) {
    res.status(400).send("unable to delete baby from db!");
  }
});


// updating ababy in the database

router.get("/babiesUpdate/:id",async(req,res)=>{
  try{
const babyUpdate =await babiesregistration.findOne({_id:req.params.id})
res.render("Updatebabies",{baby:babyUpdate})
  } catch(error){
res,statu(400).send("unable to find baby from the db")
console.log("error finding a baby!", error);
  }
});

router.post("/babiesUpdate",async(req,res)=>{
  try {
    await  babiesregistration.findOneAndUpdate({_id:req.query.id},req.body);
    res.redirect("/babieslist");
  } catch (error) {
    res,statu(404).send("unable to update baby from the db");
 
  }
})

module.exports = router;