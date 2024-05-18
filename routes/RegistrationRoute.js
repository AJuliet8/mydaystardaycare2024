const express = require("express");
const path = require("path");
const router = express.Router();

// console.log(__dirname); // This will help in debugging the current directory path

// Adjust the model imports as per your project structure
// const adminModelPath = path.join(__dirname, "../models/adminmodel");
// console.log(`Loading Admin model from: ${adminModelPath}`);
// const Admin = require(adminModelPath); // Adjust this path if necessary

const registrationModelPath = path.join(__dirname, "../models/registrationmodel");
console.log(`Loading Registration model from: ${registrationModelPath}`);
const registrationmodel = require(registrationModelPath);

// GET request for admin registration
// router.get("/adminregistration", (req, res) => {
//   res.render(path.join(__dirname, "../views/adminregistration"));
// });

// // POST request for admin registration
// router.post("/adminregistration", async (req, res, next) => {
//   try {
//     const admin = new Admin(req.body);
//     console.log(admin);
//     await Admin.register(admin, req.body.password);
//     res.redirect("/index");
//   } catch (error) {
//     res.status(400).send("Couldn't register admin");
//     console.log(error);
//   }
// });

// GET request for user registration
router.get("/adminregistration", (req, res) => {
  res.render("adminregistration");
});

// POST request for user registration
router.post("/adminregistration", async (req, res) => {
  try {
    const user = new registrationmodel(req.body);
    console.log(user);
    await registrationmodel.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/adminregistration");
    });
  } catch (err) {
    res.status(400).send("User not registered");
    console.log(err);
  }
});

module.exports = router;
