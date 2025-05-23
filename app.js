const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandling = require("./utils/globalErrorHandling");
const appError = require("./utils/appError");
const authRoutes = require("./routes/authRoutes");
const calculateRoutes = require("./routes/calculateRotes");
const muscleRoutes = require("./routes/muscleRoutes");
const exerciseRoutes = require("./routes/exercisesRoutes");
const trainingSystemRoutes = require("./routes/trainingSystemRoutes");
const mainProtienRoutes = require("./routes/mainProtienRoutes.js");
const mainCarbRoutes = require("./routes/mainCarbRoutes.js");
const mainHealthyRoutes = require("./routes/healthyRoutes.js");
const mainDiaryRoutes = require("./routes/diaryRoutes.js");
const bulkRoutes = require("./routes/bulkRoutes.js");
const cuttingRoutes = require("./routes/cuttingRoutes.js");
const supplementRoutes = require("./routes/supplementRoutes.js");
const pushPullRoutes = require("./routes/pushPullRoutes.js");
const arnoldRoutes = require("./routes/arnoldRoutes.js");
const app = express();

app.use(cors());
app.use(morgan("dev"));

if (process.env.NODE_ENV === "development") {
  console.log("you are in dev mode🤨");
} else {
  console.log("you are in production mode");
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

// MOUNTING ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/calculate", calculateRoutes);
app.use("/api/muscle", muscleRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use("/api/protiens", mainProtienRoutes);
app.use("/api/carb", mainCarbRoutes);
app.use("/api/healthy", mainHealthyRoutes);
app.use("/api/diary", mainDiaryRoutes);
app.use("/api/bulk", bulkRoutes);
app.use("/api/cutting", cuttingRoutes);
app.use("/api/supplement", supplementRoutes);
app.use("/api/brosplit", trainingSystemRoutes);
app.use("/api/pushpull", pushPullRoutes);
app.use("/api/arnoldsplit", arnoldRoutes);
app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});
// GLOBAL ERROR HANDLING MIDDLEWARE FOR EXPRESS
app.use(globalErrorHandling);

module.exports = app;
