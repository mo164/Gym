const {Bulking} = require("../models/nutrationProgramsModel");
const mainSources = require("../utils/mainSources");

exports.createNutrationProgram = mainSources.create(Bulking);

exports.getAllNutrationPrograms = mainSources.getAll(Bulking);

exports.updateNutrationProgram = mainSources.update(Bulking);

exports.getSpecificNutrationProgram = mainSources.getById(Bulking);

exports.deleteNutrationProgram = mainSources.delete(Bulking);
