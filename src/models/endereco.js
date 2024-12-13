import Sequelize, {Model} from "sequelize";

export default class Endereco extends Model{
  static init(sequelize){
    super.init({
      provincia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate :{
          len: {
            args: [3,10],
            msg: 'Campo provincia deve ter entre 3 a 10 caracteres',
          },
        }
      },

      municipio:  {
        type: Sequelize.STRING,
        defaultValue: '',
        validate :{
          len:{
            args: [3,10],
            msg: 'Campo provincia deve ter entre 3 a 10 caracteres',
          }
        }
      },

      bairro:  {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
         len:{
           args: [3, 255],
          msg: 'o campo bairro tem que ter 3 a 255 carateres'
         }
        }
      },

      rua_ou_avenida: {
        type:  Sequelize.STRING,
        defaultValue: '',
        validate: {
          len:{
            args: [3, 255],
          msg: 'o campo rua ou avenida tem que ter 3 a 255 carateres'
          }
        }
      },

      numero_da_casa:  {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 7],
            msg: 'Campo número da casa de ter entre 2 a 7 caracteres',
          }
        }
      },

      ponto_de_referencia: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
       cliente_id: {
            type: Sequelize.INTEGER,
            defaultValue: '',
            validate: {
            len: {
              args: [1, 10000],
              msg: 'A coluna cliente_id Não foi inserido nenhum valor',
           }
         }
       }
    },{
      sequelize,
    });
    return this
  }

}
