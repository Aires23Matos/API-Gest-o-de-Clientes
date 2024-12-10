import Sequelize, {Model} from "sequelize";

export default class Responsavel extends Model{
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      telefone: {
        type: Sequelize.INTEGER,
        validate: {
          len: {
             args: [9,9],
             msg: 'Só é permitido números de 9 caraters',
          },
          isInt: {
            msg: 'Campo telefone deve ser obrigatporio inserir valores inteiros.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [4, 20],
            msg: 'O email deve ter mais de  4 carateres até 20',
          },
          isEmail: {
            msg: 'Dados inserido não é um email',
          }
        }
      }
    }, {
      sequelize,
    });
  }
}
