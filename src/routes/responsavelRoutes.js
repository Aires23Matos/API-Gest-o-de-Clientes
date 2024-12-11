import { Router } from "express";
import responsavelController from "../controllers/ReponsavelController";

const router = new Router();

router.post('/', responsavelController.store);
router.get('/', responsavelController.index);
router.get('/:id', responsavelController.show);
router.put('/:id', responsavelController.update);

export default router;

