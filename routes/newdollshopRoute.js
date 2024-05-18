const express = require('express');
const router = express.Router();
// const newDollshop = require('/models/newDollshopmodel'); // Correct path to the model

// GET route to render the form for adding a doll
router.get('/add', (req, res) => {
  res.render('add-doll-form'); // Assuming your Pug file is named add-doll-form.pug
});

// POST route to handle adding a new doll
router.post('/add', async (req, res) => {
  try {
    const { dollName, dollDescription, dollPrice, typeOfDoll, amount } = req.body;

    // Create a new doll instance
    const newDoll = new Dollshop({
      dollName,
      dollDescription,
      dollPrice,
      typeOfDoll,
      amount
    });

    // Save the new doll to the database
    const savedDoll = await newDoll.save();

    // Send the saved doll data back as JSON response
    res.status(201).json({ message: 'New doll added successfully', savedDoll });
  } catch (error) {
    console.error('Error adding new doll:', error);
    res.status(500).json({ error: 'An error occurred while adding the new doll' });
  }
});

module.exports = router;
