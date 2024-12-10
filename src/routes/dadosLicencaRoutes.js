import {Router} from 'express';
import DadosLicencaController from '../controllers/DadosLicencaController';

const router = new Router();

router.post('/', DadosLicencaController.store);

export default router;
