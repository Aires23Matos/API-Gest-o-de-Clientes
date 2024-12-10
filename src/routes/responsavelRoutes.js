import { Router } from "express";
import responsavelController from "../controllers/ReponsavelController";

const router = new Router();

router.post('/', responsavelController.store);

export default router;

