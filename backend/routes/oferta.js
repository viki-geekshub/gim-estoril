const router = require('express').Router();
const OfertaController = require('../controllers/OfertaController.js');
const { authentication } = require('../middleware/authentication.js');
router.get('/', OfertaController.getAll);
router.post('/', OfertaController.insert);
router.patch('/:id', authentication, OfertaController.update);
router.delete('/:id', OfertaController.delete);

module.exports = router;