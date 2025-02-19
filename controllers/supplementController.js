const Supplement = require("./../models/supplementModel");
const handlerFunction = require("../utils/mainSources");

exports.createSupplement = handlerFunction.create(Supplement);

exports.getAllSupplements = handlerFunction.getAll(Supplement);

exports.updateSupplement = handlerFunction.update(Supplement);

exports.getSpecificSupplement = handlerFunction.getById(Supplement);

exports.deleteSupplement = handlerFunction.delete(Supplement);
