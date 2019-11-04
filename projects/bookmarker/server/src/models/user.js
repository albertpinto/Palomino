const mongoose = require("mongoose")
const validator =require("validator")
const bcryptjs =require("bcryptjs")
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
        trim:true
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Email is invalid, it should like abc@cdb.com!")
            }
        }


    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error("Password is invalid, it cannot contain the value of password!")
            }
        }
    },
    company:{
        type:String,
        trim:true,
        required:false        
        
    },
    title:{
        type:String,
        trim:true,
        required:false        
        
    },
    avatar:{
        type:String,
        trim:true,
        required:false        
        
    }   

})


userSchema.statics.findByCredentials= async (email,password)=> {

        const user = await User.findOne({email})
        console.log(user)
        if (!user) {
            throw Error ("Unable to Login !")
        }
        const isMatch = await bcryptjs.compare(password,user.password)
        if (!isMatch) {
            console.log ('password failed')
            throw Error ("Unable to Login !")
        }        
        return user
}

//Saving a plain text password to a hashed password
userSchema.pre('save', async function(next){
    const user =this
    if (user.isModified("password")){
        user.password=await bcryptjs.hash(user.password,8)
        console.log(user.password)
    }
    //Save is done in the router model, only the hashing is done here.
    //user.save()
    next()
})
const User = mongoose.model('User', userSchema)
module.exports=User