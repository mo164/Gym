const { diary } = require("../models/baseModel");
const mainSources = require("./../utils/mainSources");

exports.createDiarySource = mainSources.create(diary);

exports.getAllDiarySources = mainSources.getAll(diary);

exports.updateDiarySource = mainSources.update(diary);

exports.getSpecificDiarySource = mainSources.getById(diary);

exports.deleteDiarySource = mainSources.delete(diary);
