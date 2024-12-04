import {Router} from 'express';
import MoradaController from '../controllers/MoradaController';

const router = new Router();

router.post('/', MoradaController.store);

export default router;
