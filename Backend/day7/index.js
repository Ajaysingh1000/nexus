
const mongoose = require("mongoose");
// const { Schema } = mongoose;

const connect = async() => {
    // on the flow database ko create kar sakta hai wo bhi last mai 
    // agar exist nahi karta tab create kar dega 
    await mongoose.connect("mongodb+srv://Ajay1561:XnfMD4LKwn0QVmV0@testmongo.wfeangm.mongodb.net/BookStore");
};

module.exports = {
    connect
}