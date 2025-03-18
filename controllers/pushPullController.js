const { BushPullLegs } = require("../models/trainingProgrammesModel");
const handlerFunction = require("../utils/mainSources");

exports.addtrainingProramme = handlerFunction.create(BushPullLegs);
exports.getAlltrainingProrammes = handlerFunction.getAll(BushPullLegs);
exports.getSpecificDay = handlerFunction.getById(BushPullLegs, "exercises");
exports.updateTrainingProrammes = handlerFunction.update(BushPullLegs);
exports.deleteSpecificDay = handlerFunction.delete(BushPullLegs);
