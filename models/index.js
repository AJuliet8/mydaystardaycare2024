const mongoose = require("mongoose");

const babySchema =new mongoose.Schema({
getstarted:{
     type:String,
    trim:true

},

})
module.exports=mongoose.model("index", indexSchema)