const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newDollshopSchema = new Schema({
  dollName: {
    type: String,
    trim: true
  },
  dollDescription: {
    type: String,
    trim: true
  },
  dollPrice: {
    type: String,
    trim: true
  },
  typeOfDoll: {
    type: String,
    trim: true
  },
  amount: {
    type: String,
    trim: true
  }
});

const newDollshop = mongoose.model('newDollshop', newDollshopSchema);
module.exports = newDollshop;
