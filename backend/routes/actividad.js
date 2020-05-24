import express from "express";
const router = express.Router();
import ActividadController from "../controllers/ActividadController.js";
import * as authMiddlewares from '../middleware/authenticaction.js';
const { authentication } = authMiddlewares;
router.get('/', ActividadController.getAll);
router.post('/', ActividadController.insert);
router.patch('/:id', authentication, ActividadController.update);
router.delete('/:id', ActividadController.delete);

export default router;