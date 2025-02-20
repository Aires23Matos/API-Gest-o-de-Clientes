import { Router } from 'express';
import UserController from '../controllers/UserController';
const router = new Router();
router.post('/auth/register/', UserController.store);
router.get('/', UserController.index);
router.get('/auth/login/:id', UserController.show);
router.put('/:id', UserController.Update);
router.delete('/:id', UserController.delete);
export default router;