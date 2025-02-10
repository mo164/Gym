const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, "en-US", { ignore: " " });
      },
      message: "Name must contain only letters!",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Provide a valid Email",
    },
  },
  phone: {
    type: String,
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, "any");
      },
      message: "Provide a valid phone number",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Too short password"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords are not the same",
    },
    select: false,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

userSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next()
});

userSchema.statics.compare = async function (realPassword,userPassword) {
  return await bcrypt.compare(realPassword,userPassword)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
