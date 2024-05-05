const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminregistrationSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },

  role: {
    type: String,
    trim: true
  }
});

adminregistrationSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("registrationmodel", adminregistrationSchema);
