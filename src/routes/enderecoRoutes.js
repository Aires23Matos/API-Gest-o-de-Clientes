import { Router } from "express";
import enderecoController from "../controllers/EnderecoController";


const route = new Router();


route.post('/', enderecoController.store);
route.get('/', enderecoController.index);
route.get('/:id',enderecoController.show);
route.put('/:id', enderecoController.update);

export default route;
