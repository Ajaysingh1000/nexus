
const valid = require('validator')
const validator = (data) =>{

    const mandatoryField = ["firstName","email","password"]
    const isAllow = mandatoryField.every((field) => {
        return Object.keys(data).includes(field);
    })

    if (!isAllow) {
        throw new Error("All fields are mandatory");
    }

    if (!valid.isEmail(data.email)) {
        throw new Error("Invalid email");
    }

    if (!valid.isStrongPassword(data.password)) {
        throw new Error("Invalid password");
    }

}

module.exports = validator