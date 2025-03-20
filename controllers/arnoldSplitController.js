const { ArnoldSplit } = require("../models/trainingProgrammesModel");
const handlerFunction = require("../utils/mainSources");

exports.addtrainingProramme = handlerFunction.create(ArnoldSplit);
exports.getAlltrainingProrammes = handlerFunction.getAll(ArnoldSplit);
exports.getSpecificDay = handlerFunction.getById(ArnoldSplit, "exercises");
exports.updateTrainingProrammes = handlerFunction.update(ArnoldSplit);
exports.deleteSpecificDay = handlerFunction.delete(ArnoldSplit);
