const express = require('express');
const router = express.Router();
const babiesregistration = require('../models/babiesregistration');
const sitterreg = require('../models/sitterreg');

// Render the baby registration form
router.get('/babiesreg', (req, res) => {
  res.render('babiesregistration');
});

// Handle baby registration
router.post('/babiesreg', async (req, res) => {
  try {
    const baby = new babiesregistration(req.body);
    await baby.save();
    res.redirect('/babieslist');
  } catch (error) {
    res.status(400).send('Sorry, error occurred, baby not registered');
    console.log('Error babiesregistration', error);
  }
});

// Render the clock-in form
router.get('/clockinbaby/:id', async (req, res) => {
  try {
    const sitters = await sitterreg.find();
    const clockinbaby = await babiesregistration.findById(req.params.id);
    if (!clockinbaby) {
      return res.status(404).send('Baby not found');
    }
    const clockedInBabies = await babiesregistration.find({ status: 'ClockedIn' });
    res.render('clockinbaby', {
      baby: clockinbaby,
      sitters: sitters,
      clockedInBabies: clockedInBabies,
    });
  } catch (error) {
    console.log('Error finding clockinbaby:', error);
    res.status(500).send('Unable to find clockinbaby in the database');
  }
});

// Handle clocking in a baby
router.post('/clockinbaby', async (req, res) => {
  try {
    const babyId = req.body.id;
    const updatedBaby = await babiesregistration.findByIdAndUpdate(babyId, { status: 'ClockedIn' }, { new: true });
    if (!updatedBaby) {
      return res.status(404).send('Baby not found');
    }
    res.redirect('/clockedinbabies');
  } catch (error) {
    console.log('Error clocking in baby:', error);
    res.status(500).send('Unable to clock in baby');
  }
});

// Render the clock-out table
router.get('/clockouttable', async (req, res) => {
  try {
    const babies = await babiesregistration.find();
    res.render('clockouttable', { babies });
  } catch (error) {
    res.status(400).send('Unable to fetch babies data');
  }
});

// Render the clock-out form for a specific baby
router.get('/clockoutbaby/:id', async (req, res) => {
  try {
    const clockoutbaby = await babiesregistration.findById(req.params.id);
    if (!clockoutbaby) {
      return res.status(404).send('Baby not found');
    }
    res.render('clockoutbaby', { baby: clockoutbaby });
  } catch (error) {
    res.status(400).send('Unable to find item in the database');
  }
});

// Handle clocking in a baby
router.post('/clockinbaby/:id', async (req, res) => {
  try {
    const babyId = req.params.id;
    // Perform actions to clock in the baby with ID babyId
    // Assuming the baby is successfully clocked in, redirect to /clockintable
    res.redirect('/clockintable');
  } catch (error) {
    res.status(500).send('Error clocking in baby');
    console.log('Error clocking in baby:', error);
  }
});
// Render the clock-in table
router.get('/clockintable', async (req, res) => {
  try {
    const clockedInBabies = await babiesregistration.find({ status: 'ClockedIn' });
    res.render('clockintable', { babies: clockedInBabies });
  } catch (error) {
    res.status(400).send('Unable to fetch clocked-in babies data');
    console.log('Error fetching clocked-in babies data:', error);
  }
});




// Fetch the list of clocked-in babies
router.get('/clockedinbabies', async (req, res) => {
  try {
    const babies = await babiesregistration.find({ status: 'ClockedIn' });
    res.render('clockintable', { babies });
    console.log('clockinbaby', babies);
  } catch (error) {
    res.status(400).send('Unable to find baby!');
    console.log('Unable to find babies in db', error);
  }
});

// Fetch the list of clocked-out babies
router.get('/clockedoutbabies', async (req, res) => {
  try {
    const babies = await babiesregistration.find({ status: 'ClockedOut' });
    res.render('clockedouttable', { babies });
    console.log('clockoutbaby', babies);
  } catch (error) {
    res.status(400).send('Unable to find baby!');
    console.log('Unable to find clockedoutbabies in db', error);
  }
});

// Handle deleting a baby
router.post('/delete/:id', async (req, res) => {
  try {
    await babiesregistration.findByIdAndDelete(req.params.id);
    res.redirect('/babieslist');
  } catch (error) {
    res.status(400).send('Unable to delete baby from db!');
    console.log('Error deleting baby:', error);
  }
});







// Render the update form for a specific baby
router.get('/babiesUpdate/:id', async (req, res) => {
  try {
    const babyUpdate = await babiesregistration.findById(req.params.id);
    if (!babyUpdate) {
      return res.status(404).send('Baby not found');
    }
    res.render('Updatebabies', { baby: babyUpdate });
  } catch (error) {
    res.status(400).send('Unable to find baby from the db');
    console.log('Error finding a baby!', error);
  }
});

// Handle updating a baby's information
router.post('/babiesUpdate/:id', async (req, res) => {
  try {
    await babiesregistration.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/babieslist');
  } catch (error) {
    res.status(404).send('Unable to update baby from the db');
    console.log('Error updating baby:', error);
  }
});

// Render the list of babies
router.get('/babieslist', async (req, res) => {
  try {
    const babies = await babiesregistration.find();
    res.render('babytable', { babies });
  } catch (error) {
    res.status(400).send('Unable to find babies from database');
    console.log('Unable to find babies from database', error);
  }
});



module.exports = router;
