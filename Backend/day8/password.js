
const bcrypt = require("bcrypt");


const password = "Ajay@123";

// hashcode + salt 
// i know await is in async function
// this is very slow process 
// const hashpass = await bcrypt.hash(password, 10);

async function main() {
    // isi ka kaam hai salt(new) ko add karna and hash ko generate karna
    // why this process slow 
    // isme round 10 hai matlab round jitna jayeda hoga utna password complex hoga
    // round ki value jitni jayda hogi utna time lagega 
    // ya to salt dedo ya round dedo
    // const hashpass = await bcrypt.hash(password, 15);
    // agar number diya hai tab salt khud se generate hoga varna hum salt generate karke 
    // de sakta hai 

    const salt = await bcrypt.genSalt(11);
    const hashpass = await bcrypt.hash(password, salt);

    const ans = await bcrypt.compare(password, hashpass);
    console.log(ans);
    // console.log(salt);
    // console.log(hashpass);
    // const isMatch = await bcrypt.compare(password, hashpass);
    // console.log(isMatch);
}

// hash code new aayega because salt change ho jayega
main();


