import Sequelize,{Model} from "sequelize";


export default class DadosLicenca extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      tecnico: Sequelize.STRING,
      data_da_instalacao: Sequelize.DATE,
      hora_de_formacao: Sequelize.TIME,
      validade_em_mes: {
        type: Sequelize.INTEGER,
        validate: {
          isInt:{
            msg: 'O Validade em mes deve conter apenas números inteiros.'
          }
        }
      },
      data_da_ativacao: Sequelize.DATE,
      data_da_expiracao: Sequelize.DATE,
      estado_da_licenca: {
        type: Sequelize.STRING,
        validate:{
          validate:{
            len :{
              args: [9,9],
              msg: 'O Estado deve ter exatamente 9 dígitos.'
            }
          }
        }
      },
      conta_pago: {
        type: Sequelize.BOOLEAN,
        validate: {
          isNumeric:{
            msg: 'O Conta Pago deve conter apenas números.'
          }
        }
      },
      valor_pago: {
        type: Sequelize.DECIMAL(10, 2),
        validate :{
          isDecimal: {
             msg: 'O Valor Pago deve conter apenas números.'
          }
        }
      },
    }, {
    sequelize,
  });
  return this;
  }
}


