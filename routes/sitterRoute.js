const express = require("express");
const router = express.Router();
const Sitterreg = require("../models/sitterreg");

// Sitter Registration
router.get("/sitter", (req, res) => {
  res.render("regisitter");
});

router.post("/sitter", async (req, res) => {
  try {
    const sitter = new Sitterreg(req.body);
    await sitter.save();
    res.redirect("/sitterlist");
  } catch (error) {
    console.log("Error registering sitter:", error);
    res.status(400).json({message:"Sorry, an error occurred during sitter registration.", error: error});
  }
});

// Clock In/Out
router.get("/clockinsitter/:id", async (req, res) => {
  try {
    const sitter = await Sitterreg.findById(req.params.id);
    if (!sitter) {
      return res.status(404).send("Sitter not found");
    }
    res.render("clockinsitter", { sitter });
  } catch (error) {
    console.log("Error finding sitter for clock-in:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/clockinsitter", async (req, res) => {
  try {
    const { id } = req.body;
    const updatedSitter = await Sitterreg.findByIdAndUpdate(id, { status: "ClockedIn" }, { new: true });
    if (!updatedSitter) {
      return res.status(404).send("Sitter not found");
    }
    res.redirect("/clockinsittertable");
  } catch (error) {
    console.log("Error clocking in sitter:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/clockoutsittertable/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSitter = await Sitterreg.findByIdAndUpdate(id, { status: "ClockedOut" }, { new: true });
    if (!updatedSitter) {
      return res.status(404).send("Sitter not found");
    }
    res.redirect("/clockoutsittertable");
  } catch (error) {
    console.log("Error processing clock-out:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Sitter Table and Clock In Table
router.get("/clockinsittertable", async (req, res) => {
  try {
    const sitters = await Sitterreg.find();
    res.render("clockinsittertable", { sitters });
  } catch (error) {
    console.log("Error fetching sitters:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/clockinsittertable", async (req, res) => {
  try {
    const clockedInSitters = await Sitterreg.find({ status: "ClockedIn" });
    res.render("clockinsittertable", { sitters: clockedInSitters });
  } catch (error) {
    console.log("Error fetching clocked-in sitters:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Sitter List
router.get("/sitterlist", async (req, res) => {
  try {
    let sitters = await Sitterreg.find();
    res.render("sittertable", { sitters: sitters });
  } catch (error) {
    res.status(400).send("unable to find sitter from database");
    console.log("unable to find sitter from database", error);
  }
});

// Clocked-In Sitters
router.get("/clockedinsitter", async (req, res) => {
  try {
    let sitters = await Sitterreg.find({ status: "ClockedIn" });
    console.log("Clocked-in sitters:", sitters);
    res.render("clockinsittertable", { sitters: sitters });
  } catch (error) {
    console.error("Error fetching clocked-in sitters:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Clocked-Out Sitters
router.get("/clockedoutsitter", async (req, res) => {
  try {
    let sitters = await sitter.find({ status: "Clockedout" });
    res.render("clockoutsittertable", { sitter: sitter });
    console.log("Clocked-out sitters:", sitter);
  } catch (error) {
    res.status(400).send("unable to find clocked-out sitters");
    console.log("unable to find clockedoutbabies in db", error);
  }
});

// Route to render the clockout sitter page
router.get("/clockoutsitter/:id", async (req, res) => {
  try {
    const clockoutsitter = await Sitter.findOne({ _id: req.params.id });
    if (!clockoutsitter) {
      return res.status(404).send("Sitter not found");
    }
    res.render("clockoutsitter", { sitter: clockoutsitter });
  } catch (error) {
    console.error("Error finding sitter for clock-out:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle clocking out a sitter
router.post("/clockoutsitter", async (req, res) => {
  try {
    const { id } = req.body;
    const clockoutsitter = await Sitter.findOne({ _id: id });
    if (!clockoutsitter) {
      return res.status(404).send("Sitter not found");
    }
    // Perform clock-out logic here, such as updating the status or removing from the list
    // Example: await Sitter.findByIdAndUpdate(id, { status: "ClockedOut" }, { new: true });
    res.redirect("/clockoutsittertable"); // Redirect to the clock-out table page
  } catch (error) {
    console.error("Error clocking out sitter:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete Sitter
router.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    await Sitterreg.deleteOne({ _id: id });
    res.redirect("back");
  } catch (error) {
    console.error("Error deleting sitter:", error);
    res.status(400).send("Unable to delete sitter from db!");
  }
});


// Update Sitter
router.get("/sitterUpdate/:id", async (req, res) => {
  try {
    const sitterUpdate = await Sitterreg.findOne({ _id: req.params.id });
    res.render("Updatesitter", { sitter: sitterUpdate });
  } catch (error) {
    res.status(400).send("unable to find sitter from the db");
    console.log("error finding a sitter!", error);
  }
});

router.post("/sitterUpdate", async (req, res) => {
  try {
    await Sitterreg.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sitterlist");
  } catch (error) {
    res.status(404).send("unable to update from sitter db");
  }
});

module.exports = router;
