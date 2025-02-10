const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: [true, 'Name is required'],  
        validate: {
            validator: function (value) { 
                return validator.isAlpha(value, 'en-US', { ignore: ' ' }); 
            },
            message: 'Name must contain only letters!'   
        }
    },
    email: {
        type: String,  
        required: [true, 'Email is required'],
        unique: true, 
        lowercase: true, 
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: 'Provide a valid Email'
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, 'any');       
            },
            message: 'Provide a valid phone number'
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Too short password"],
        select: false          
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords are not the same"
        },
        select: false  
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
