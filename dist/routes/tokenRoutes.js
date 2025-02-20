import { Router } from "express";
import tokenController from "../controllers/TokenController";
const router = new Router();
router.post('/auth', tokenController.store);
export default router;