const mongoose = require("mongoose");

const babySchema =new mongoose.Schema({
babiesregistration:{
     type:String,
    trim:true

},

sittersregistration:{
    type:String,
   trim:true
},

payment:{
    type:String,
   trim:true
}

})
module.exports=mongoose.model("index", indexSchema)