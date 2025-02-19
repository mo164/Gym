const asyncHandler = require("express-async-handler");
const Supplement = require("./../models/supplementModel");
const handlerFunction = require("../utils/mainSources");
const uploadMedia = require("../utils/uploadMedia");
 
exports.createSupplement = handlerFunction.create(Supplement);

exports.getAllSupplements = handlerFunction.getAll(Supplement);

exports.updateSupplement = handlerFunction.update(Supplement);

exports.getSpecificSupplement = handlerFunction.getById(Supplement);

exports.deleteSupplement = handlerFunction.delete(Supplement);

exports.uploadSupplementMedia = uploadMedia.uploadMedia;

exports.resizeImage = asyncHandler(async (req, res, next) => {
  if (!req.files || (!req.files.image && !req.files.video)) {
    return next(new Error("Please upload at least an image or a video"));
  }

  const imageFile = req.files.image?.[0]?.path;
  const videoFile = req.files.video?.[0]?.path;
  if (imageFile) {
    req.body.image = imageFile.replace(
      "/upload/",
      "/upload/w_100,h_148,c_crop/"
    );
  }

  if (videoFile) {
    req.body.video = videoFile;
  }

  next();
});