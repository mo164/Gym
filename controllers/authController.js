const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const appError = require("../utils/appError");

generateToken = function (userId) {
  return jwt.sign({ userId: userId }, process.env.SECRET_TOKEN, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

exports.signUp = asyncHandler(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role
  });
  const token = generateToken(user._id);
  res.status(200).json({
    message: "sign up successfully",
    token,
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
  const token = generateToken(user._id);

  res.status(200).json({
    message: "login success",
    token,
    user,
  });
});

exports.protect = asyncHandler(async (req, res, next) => {
  // check if token is exists & if exists get token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new appError("your are not login", 401));
  }

  // verify token (changed&expired)
  const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

  // 3) check if the user is still exist
  const currentUser = await User.findById(decoded.userId);
  if (!currentUser) {
    return next(new appError("user is not exist", 401));
  }
  // check if the user change the password after the token created

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppErorr("user recently changed password.. pls login again", 401)
    );
  }
  req.user = currentUser;
  next();
});

exports.allowedTo = (...roles) =>
  asyncHandler(async (req, res, next) => {
    if (!req.user) {
      return next(new appError("Not authenticated. Please log in", 401));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new appError("You are not allowed to access this route", 403)
      );
    }

    next();
  });
