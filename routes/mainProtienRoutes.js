const express = require("express");
const protienController = require("../controllers/mainProtienController");
const router = express.Router();

router
  .route("/")
  .post(protienController.createMainProtien)
  .get(protienController.getAllProtiens);
  
module.exports = router;
