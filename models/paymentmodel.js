const mongoose = require("mongoose");

const paymentSchema =new mongoose.Schema({
fullname:{
     type:String,
    trim:true

},
email:{
    type:String,
    trim:true

},
package:{

type:String,
    trim:true
},

})
module.exports=mongoose.model("payment", paymentSchema)