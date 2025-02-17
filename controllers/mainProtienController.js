const { Protien } = require("../models/baseModel");
const mainSources = require("./../utils/mainSources");

exports.createMainProtien = mainSources.create(Protien);

exports.getAllProtiens = mainSources.getAll(Protien);

exports.updateProtien = mainSources.update(Protien);

exports.getSpecificProtien = mainSources.getById(Protien);

exports.deleteProtien = mainSources.delete(Protien);
