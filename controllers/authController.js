const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const appError = require("../utils/appError");

exports.signUp = asyncHandler(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  res.status(200).json({
    message: "sign up successfully",
    user,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // if the user is not enterd email or password
  if (!email || !password) {
    return next(new appError("please provide email and password"));
  }

  // find the user by the email
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    return next(new appError("no user found with this email", 401));
  }

  // validate password
  const comparePasswords = await user.comparePasswords(password, user.password);
  if (!comparePasswords) {
    return next(new appError("invalid email or password", 401));
  }

  res.status(200).json({
    message: "login success",
    user,
  });
});
