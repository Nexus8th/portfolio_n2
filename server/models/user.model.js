const { isEmail } = require('validator')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        require: true,
        minLenght: 3,
        maxLenght: 55,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minLength: 6
    }
})