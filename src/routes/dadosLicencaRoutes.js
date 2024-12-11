import {Router} from 'express';
import DadosLicencaController from '../controllers/DadosLicencaController';

const router = new Router();

router.post('/', DadosLicencaController.store);
router.get('/', DadosLicencaController.index);
router.get('/:id', DadosLicencaController.Show);
router.put('/:id', DadosLicencaController.Update);
export default router;
