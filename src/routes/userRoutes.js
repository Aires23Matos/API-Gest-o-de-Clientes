import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
export default router;
