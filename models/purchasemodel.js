const mongoose = require("mongoose");

const purchaseSchema =new mongoose.Schema({
ItemName:{
     type:String,
    trim:true

},
Quantity:{
    type:String,
    trim:true

},
Unitcost:{

type:String,
    trim:true
},

Totalamout:{
type:String,
 trim:true
}

                    
                        
})
module.exports=mongoose.model("purchase", purchaseSchema)