import { Router } from "express";
import ContatosController from "../controllers/ContatosController";


const router = new Router();

router.post('/', ContatosController.store);

export default router;
