const path = require("path");
const express = require("express");
const morgan = require("morgan");
const globalErrorHandling = require("./utils/globalErrorHandling");
const appError = require('./utils/appError')
const authRoutes = require("./routes/authRoutes");
const calculateRoutes = require("./routes/calculateRotes")
const muscleRoutes = require("./routes/muscleRoutes");
const app = express();

app.use(morgan("dev"));

if (process.env.NODE_ENV === "development") {
  console.log("you are in dev mode");
} else {
  console.log("you are in production mode");
}

app.use(express.json());
//app.use(express.static(path.join(__dirname, "uploads")));
app.use('/uploads', express.static('uploads'));


// MOUNTING ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/calculate",calculateRoutes)
app.use("/api/muscle",muscleRoutes);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});
// GLOBAL ERROR HANDLING MIDDLEWARE FOR EXPRESS
app.use(globalErrorHandling);

module.exports = app;
