const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const appError = require("./appError");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video");

    return {
      folder: "uploads",
      resource_type: isVideo ? "video" : "image",
      allowed_formats: isVideo ? ["mp4"] : ["jpg", "png", "jpeg"],
      transformation: isVideo
        ? [
            { width: 640, height: 360, crop: "limit" },
            { quality: "auto:low" },
            { format: "mp4" },
          ]
        : [{ quality: "auto:low" }],
    };
  },
});

const multerFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image") || file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb(new appError("Only images and videos are allowed", 400), false);
  }
};

exports.uploadMedia = multer({ storage, fileFilter: multerFilter }).fields([
  { name: "image", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);
