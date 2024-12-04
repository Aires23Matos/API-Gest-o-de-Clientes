import Sequelize,{Model} from "sequelize";


export default class Cliente extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      nif:{
        type: Sequelize.INTEGER,
        validate:{
          len:{
            args: [9,9],
            msg: 'O NIF deve ter exatamente 9 dígitos.'
          },
          isNumeric:{
            msg: 'O NIF deve conter apenas números.'
          }
        }
      }
    }, {
    sequelize,
  });
  return this;
  }
}


