const express = require("express");
const router = express.Router();

// import model
const sitterregmodels = require("../models/sitterreg");

router.get("/sitter", (req, res) => {
  res.render("regisitter");
});

router.post("/sitter", async (req, res) => {
  try {
    const sitter = new sitterregmodels(req.body);
    console.log(sitter);
   await sitter.save();
   res.redirect("/sitterlist");
  } catch (error) {
    res.status(400).send("Sorry, error occurred, sitterreg not registered")
    console.log("Error regsitter", error)
    
  }
 
});

// fetching babieslist from database
router.get("/sitterlist", async(req,res)=>{
  try{
    let sitters =await  sitterregmodels.find()
    res.render("sittertable",{sitters:sitters}) // to display sitter from data base
  }catch(error){
    res.status(400).send("unable to find sitter from database")
    console.log("unable to find sitter from database")
  }
  


})

// delete route for form in database
router.post("/delete", async(req,res)=>{
  try{
    await  sitterregmodels.deleteOne({_id:req.body.id});
    res.redirect("back");
  }catch (error) {
    res.status(400).send("unable to delete sitter  from db!");
  }
  // console.log("Error deleting sitter", error)
});


// updating ababy in the database

router.get("/sitterUpdate/:id",async(req,res)=>{
  try{
const sitterUpdate =await sitterregmodels.findOne({_id:req.params.id})
res.render("Updatesitter",{sitter:sitterUpdate})
  } catch(error){
res.status(400).send("unable to find sitter from the db")
console.log("error finding a sitter!", error);
  }
});

router.post("/sitterUpdate",async(req,res)=>{
  try {
    await  sitterregmodels.findOneAndUpdate({_id:req.query.id},req.body);
    res.redirect("/sitterlist");
  } catch (error) {
    res,statu(404).send("unable to update from sitter db",);
 
  }
})


module.exports = router;