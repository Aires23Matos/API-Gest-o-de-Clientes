import {Router} from 'express';
import MoradaController from '../controllers/MoradaController';

const router = new Router();

router.post('/', MoradaController.store);
router.get('/', MoradaController.Index);
router.get('/:id', MoradaController.show);
router.put('/:id', MoradaController.update);

export default router;
