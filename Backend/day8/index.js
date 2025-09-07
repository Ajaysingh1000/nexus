
const mongoose = require("mongoose");
// const { Schema } = mongoose;

const connect = async() => {
    // on the flow database ko create kar sakta hai wo bhi last mai 
    // agar exist nahi karta tab create kar dega 
    await mongoose.connect(process.env.DB_CONNECT_KEY);
};

module.exports = {
    connect
}