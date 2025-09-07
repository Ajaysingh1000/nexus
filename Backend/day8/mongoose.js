
const mongoose = require("mongoose");
const { Schema } = mongoose;

const connect = async() => {
    // on the flow database ko create kar sakta hai wo bhi last mai 
    // agar exist nahi karta tab create kar dega 
    await mongoose.connect("mongodb+srv://Ajay1561:XnfMD4LKwn0QVmV0@testmongo.wfeangm.mongodb.net/BookStore");

    const userSchema = new Schema({
        name: String,
        age: Number
    })

    // model ko create karna == collection ko create karna
    // isme collection ki name kuch bhi de sakta hai
    // below collection ka name User hai
    // class create ki hai User khhod mai ek class hai 
    const User = mongoose.model("User", userSchema);

    // const user = new User({
    //     name: "mohit",
    //     age: 21
    // })
    // const result = await user.save();
    // console.log(result);

    // await User.create({name: "mohit", age: 21})
    await User.insertMany([
        {name: "mohit", age: 21},
        {name: "mohit", age: 24},
    ])
};

connect();