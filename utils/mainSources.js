const asyncHandler = require("express-async-handler");
const appErorr = require("./../utils/appError");

exports.create = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.create(req.body);
    res.status(201).json({
      message: "success",
      result: docs.length,
      docs,
    });
  });

exports.getAll = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.find();
    res.status(200).json({
      message: "success",
      results: docs.length,
      docs,
    });
  });

exports.getById = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.findById(req.params.id);
    if (!docs) {
      return next(new appErorr("no document found with this id", 404));
    }
    res.status(200).json({
      message: "success",
      docs,
    });
  });

exports.update = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!docs) {
      return next(new appErorr("no document found with this id", 404));
    }
    res.status(200).json({
      message: "success",
      docs,
    });
  });

exports.delete = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.findByIdAndDelete(req.params.id);
    if (!protien) {
      return next(new appErorr("no document found with this id", 404));
    }
    res.status(200).json({
      message: " delete successfully",
    });
  });
