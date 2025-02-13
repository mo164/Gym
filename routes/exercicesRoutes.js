const mongoose = require('mongoose');
const exercisesController = require('./../controllers/exercisesController')
const router = express.Router();

router.route('/Explore by Muscle').get(exercisesController.exploreByMuscle)
module.exports = router