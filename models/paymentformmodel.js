const mongoose = require("mongoose");

const paymentformSchema =new mongoose.Schema({
servicetype:{
     type:String,
    trim:true

},
paymentamout:{
    type:String,
    trim:true

},
paymentmethod:{

type:String,
    trim:true
},


})
module.exports=mongoose.model("paymentform", paymentformSchema)