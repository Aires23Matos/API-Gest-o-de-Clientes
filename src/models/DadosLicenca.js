import Sequelize, {Model} from "sequelize";

export default class DadosLicenca extends Model {
  static init(sequelize){
    super.init(
      {
        tecnico: {
          type: Sequelize.STRING,
          defaultValue: '',
            validate: {
              len: {
                args: [3, 255],
              msg: 'Nome  do tecnico precisa ter entre 3 e 255 caracteres.'
              }
            }
        },
        data_da_instalacao:{
          type:  Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
            msg: 'Data de intalação precisa ter entre 3 e 255 caracteres.'
            }
          }
        },
        hora_de_formacao: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Apenas é permitidos números inteiros'
            }
          }

        },
        validade_em_mes: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isNumeric:{
              msg: 'Campo Validade em mes Deve ser inserido apenas números inteiros'
            }
          }
        },
        data_da_ativacao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Data de ativação  precisa ter entre 3 e 255 caracteres.'
            }
             }
        },
        data_da_expiracao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Data de expiração precisa ter entre 3 e 255 caracteres.'

            }
           }
        },
        estado_da_licenca:{
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
           len: {
             args: [3, 255],
              msg: 'estado da licença precisa ter entre 3 e 255 caracteres.'
           }
          }
        },
        conta_pago: {
          type: Sequelize.FLOAT(10, 3),
          validate: {
            isDecimal: {
              msg: 'Campo conta paga de ser inserido apenas valores reais'
            }
          }
        },
        valor_pago: {
          type: Sequelize.DECIMAL,
          validate: {
            isDecimal: {
              msg: 'Campo valor pago deve ser inserido apenas valores decimais'
            }
          }
        }
      },{
        timestamps: false,
        sequelize,
      });
    return this;
  }
};
