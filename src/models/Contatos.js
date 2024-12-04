import Sequelize,{Model} from "sequelize";


export default class Contatos extends Model {
  static init(sequelize){
    super.init({
      telefone: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [9, 10],
            msg: 'Campo telefone deve ter 9 caracteres',
          }
        }
      },
      email:{
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email Já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          }
        },
      },
      web_site: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
    sequelize,
  });
  return this;
  }
}
