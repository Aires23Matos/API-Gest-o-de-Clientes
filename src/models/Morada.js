import Sequelize,{Model} from "sequelize";

export default class Morada extends Model {
  static init(sequelize){
    super.init({
      provincia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Campo provincia deve ter entre 3 a 20 caracteres',
          }
        }
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
       validate:{
        len:{
          args: [3, 50],
          msg: 'Campo endereço de ter entre 3 a 50 caracteres',
        }
       }
      },
       cliente_id: {
        type: Sequelize.INTEGER,
       defaultValue: '',
       validate: {
        len: {
          args: [1, 10000],
          msg: 'A coluna cliente_id Não foi inserido nenhum valor'
        }
      }
       }
    }, {
    sequelize,
  });
  return this;
  }
  //  static associate(models){
  //    this.hasOne(models.Endereco,{foreignKey: 'morada_id'});
  //  }
}



