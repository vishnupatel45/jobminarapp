const mongoose = require('mongoose')

const Signup = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userAge:{
        type:Number,
        required:true
    },
    userGender:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPhone:{
        type:Number,
        required:true
    }
})
const signmodal = mongoose.model('jobminarsign',Signup)

module.exports= {
    signmodal
}