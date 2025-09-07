const { mongo } = require('mongoose');

const mongoose =require('mongoose');

// mongoose.connect('mongodb://localhost:27017/leetcodedb');


async function main() {
    await mongoose.connect(process.env.DB_CONNECT_STRING);
}

module.exports = main