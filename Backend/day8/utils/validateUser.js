const validater = require('validator')


const validateUser = (data) =>{
    const mandatoryField = ["firstName","email","password"]
    const isAllow = mandatoryField.every((field) => {
        return Object.keys(data).includes(field);
    })

    if (!isAllow) {
        throw new Error("All fields are required")
    }

    if (!validater.isEmail(data.email)) {
        throw new Error("Invalid email")
    }

    if (!validater.isStrongPassword(data.password)) {
        throw new Error("Invalid password")
    }

    if (!data.firstName.length >= 3 && data.firstName.length <= 20) {
        throw new Error("Invalid first name")
    }

}

module.exports = validateUser