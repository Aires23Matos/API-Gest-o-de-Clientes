import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Cliente from "../models/cliente";

const models = [Cliente];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
