import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Cliente from "../models/cliente";
import User from "../models/User";
import Morada from "../models/Morada";
import Contatos from '../models/Contatos';
import DadosLicenca from "../models/DadosLicenca";

const models = [Cliente, User, Morada, Contatos, DadosLicenca];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
