import { Router } from "express";
import ContatosController from "../controllers/ContatosController";


const router = new Router();

router.post('/', ContatosController.store);
router.get('/', ContatosController.index);
router.get('/:id', ContatosController.Show);
router.put('/:id', ContatosController.update);
export default router;
