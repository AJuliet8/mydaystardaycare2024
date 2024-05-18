const express = require("express");
const router = express.Router();

// import model
// const Babymodels = require("../models/babiesregistration");
const babiesregistration = require("../models/babiesregistration");
const sitterreg = require("../models/sitterreg");

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

  // Route to handle clocking in a baby (GET request to render the clock-in form)
router.get("/clockinbaby/:id", async (req, res) => {
  try {
    // Fetch sitters data
    const sitters = await sitterreg.find();
    // Find the baby by ID
    const clockinbaby = await babiesregistration.findOne({ _id: req.params.id });
    if (!clockinbaby) {
      // Handle case where baby is not found
      return res.status(404).send("Baby not found");
    }
    // Assuming you want to show only babies with status "ClockedIn"
    const clockedInBabies = await babiesregistration.find({ status: "ClockedIn" });
    // Render the clock-in form with relevant data
    res.render("clockinbaby", {
      baby: clockinbaby,
      sitters: sitters,
      clockedInBabies: clockedInBabies,
    });
  } catch (error) {
    console.log("Error finding clockinbaby:", error);
    res.status(500).send("Unable to find clockinbaby in the database");
  }
});

// Clock in POST route (handle form submission)
router.post("/clockinbaby", async (req, res) => {
  try {
    // Get baby ID from the form body
    const babyId = req.body.id; // Assuming your form sends the baby ID in the request body
    // Update the baby's status to "ClockedIn"
    const updatedBaby = await babiesregistration.findByIdAndUpdate(babyId, { status: "ClockedIn" }, { new: true });
    if (!updatedBaby) {
      // Handle case where baby is not found
      return res.status(404).send("Baby not found");
    }
    // Redirect to the page displaying clocked-in babies or any other desired page
    res.redirect("/clockedinbabies");
  } catch (error) {
    console.log("Error clocking in baby:", error);
    res.status(500).send("Unable to clock in baby");
  }
});

// Route to render the clock-out table
router.get("/clockouttable", async (req, res) => {
    try {
        const babies = await babiesregistration.find(); // Assuming babiesregistration is your model
        res.render("clockouttable", { babies });
    } catch (error) {
        res.status(400).send("Unable to fetch babies data");
    }
});

// Route to render the clockoutbaby page
router.get("/clockoutbaby/:id", async (req, res) => {
    try {
        const clockoutbaby = await babiesregistration.findOne({ _id: req.params.id });
        res.render("clockoutbaby", {
            baby: clockoutbaby,
        });
    } catch (error) {
        res.status(400).send("Unable to find item in the database");
    }
});

// Route to handle clocking out a baby
router.post("/clockoutbaby", async (req, res) => {
    try {
        const clockoutbaby = await babiesregistration.findOne({ _id: req.body.id });
        // Perform clock-out logic here, such as updating the status or removing from the list
        res.redirect("/clockouttable"); // Redirect to the clock-out table page
    } catch (error) {
        res.status(400).send("Unable to find item in the database");
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

});

// fetching clocked in babies from db
router.get("/clockedinbabies", async (req, res)=>{
  try {
    let babies = await babiesregistration.find({status: "ClockedIn"})
    res.render("clockintable", {babies:babies})
    console.log("clockinbaby", babies);

  } catch (error) {
    res.status(400).send("unable to find baby!")
    console.log("unable to find babies in db", error);
    
  }
});
// fetching clocked out babies from db
router.get("/clockedoutbabies", async (req, res)=>{
  try {
    let babies = await babiesregistration.find({status: "Clockedout"})
    res.render("clockedouttable", {babies:babies})
    console.log("clockoutbaby", babies);

  } catch (error) {
    res.status(400).send("unable to find baby!")
    console.log("unable to find clockedoutbabies in db", error);
    
  }
});


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