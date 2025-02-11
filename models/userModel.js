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
    }
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

// Slugify the name if it's in English
userSchema.pre("save", function (next) {
  if (validator.isAlpha(this.name, "en-US", { ignore: " " })) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// Password comparison function
userSchema.methods.comparePasswords = async function (enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
