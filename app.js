import homeRoutes from './src/routes/homeRoutes';

import dotenv from 'dotenv';
dotenv.config();
import express  from 'express';
import './src/database'
import userRoutes from './src/routes/userRoutes';
import moradaRoutes from './src/routes/moradaRoutes';
import contatosRoutes from './src/routes/contatosRoutes';
import dadosLicencaRoutes from './src/routes/dadosLicencaRoutes';
import responsavelRoutes from './src/routes/responsavelRoutes';
class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/moradas/', moradaRoutes);
    this.app.use('/contatos/', contatosRoutes);
    this.app.use('/dadoslicencas/', dadosLicencaRoutes);
    this.app.use('/responsavel/', responsavelRoutes);
  }
}

export default new App().app;
