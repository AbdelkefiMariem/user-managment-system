const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
   name : {
        type : String
    },
   email : {
        type : String,
   },
    number : {
        type : Number,
        unique: true
    },
    adress : {
        type : String
    },
    company: {
        type : String
        ,enum:["Ooredoo","Telecom","Orange"]
    },
    gender : {type:String,
         enum:["female","male"] 
    }

})
const User=mongoose.model('User',UserSchema);
module.exports =User