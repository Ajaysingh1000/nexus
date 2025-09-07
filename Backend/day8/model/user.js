const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
     
    firstName : {
        type: String,
    },
    lastName : {
        type: String,
    },
    age : {
        type: Number,
        min: 14,
        max:80
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true

    },
    password : {
        type: String,
    },
    gender : {
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
    }

},{
    timestamps: true
})  

const User = mongoose.model("User", userSchema);

userSchema.methods.getJWT = function(){
    const ans = jwt.sign({'_id' : this._id, 'email':this.email}, "secretkey")
    return ans
}

userSchema.methods.comparePassword = async function(userPassword){
    const isAllow = await bcrypt.compare(userPassword, this.password)
    return isAllow
}

module.exports = {
    User
}



