const { BroSplit } = require("../models/trainingProgrammesModel");
const handlerFunction = require("../utils/mainSources");

exports.addtrainingProramme = handlerFunction.create(BroSplit);
exports.getAlltrainingProrammes = handlerFunction.getAll(BroSplit);
exports.getSpecificDay = handlerFunction.getById(BroSplit, "exercises");
exports.updateTrainingProrammes = handlerFunction.update(BroSplit);
exports.deleteSpecificDay = handlerFunction.delete(BroSplit);
