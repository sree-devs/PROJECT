const mongoose = require('mongoose')

const schema = mongoose.Schema

const registerSchema = new schema({
           login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
           name:{type:String}, 
           address:{type:String}, 
           email:{type:String},  
           phone:{type:String},
           username:{type:String},
           password:{type:String},
})
const registerModel = mongoose.model('registration_tb',registerSchema)

module.exports = registerModel