import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Cliente from "../models/cliente";
import User from "../models/User";
import Morada from "../models/Morada";

const models = [Cliente, User, Morada];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
