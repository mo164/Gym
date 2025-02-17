const { Carb } = require("../models/baseModel");
const mainSources = require("./../utils/mainSources");

exports.createCarbSource = mainSources.create(Carb);

exports.getAllCarbSources = mainSources.getAll(Carb);

exports.updatecarbSource = mainSources.update(Carb);

exports.getSpecificcarbSource = mainSources.getById(Carb);

exports.deletecarbSource = mainSources.delete(Carb);
