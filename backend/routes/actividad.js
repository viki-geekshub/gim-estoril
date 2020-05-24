const router = require('express').Router();
const ActividadController = require('../controllers/ActividadController.js');
const { authentication } = require('../middleware/authenticaction.js');
router.get('/', ActividadController.getAll);
router.post('/', ActividadController.insert);
router.patch('/:id', authentication, ActividadController.update);
router.delete('/:id', ActividadController.delete);

module.exports = router;