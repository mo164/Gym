const { healthy } = require("../models/baseModel");
const mainSources = require("./../utils/mainSources");

exports.createHealthySource = mainSources.create(healthy);

exports.getAllHealthySources = mainSources.getAll(healthy);

exports.updateHealthySource = mainSources.update(healthy);

exports.getSpecificHealthySource = mainSources.getById(healthy);

exports.deleteHealthySource = mainSources.delete(healthy);
