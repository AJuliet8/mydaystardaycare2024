const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const newdollshopSchema = new mongoose.Schema({
  shoppingcart: {
    type: String,
    trim: true
  },
  dollshop: {
    type: String,
    trim: true
  }

  
});



module.exports = mongoose.model("newdollshopmodel", newdollshopSchema);
