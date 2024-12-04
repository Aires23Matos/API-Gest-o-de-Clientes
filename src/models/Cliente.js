import Sequelize,{Model} from "sequelize";


export default class Cliente extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      nif:Sequelize.INTEGER,
    }, {
    sequelize,
  });
  return this;
  }
}


