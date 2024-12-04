import Sequelize,{Model} from "sequelize";
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Campo nome deve ter entre 3 a 20 caracteres',
          }
        }
      },
      email:{
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Emial Já existe'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          }
        }
      },
      password_hash:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 15],
            msg: 'A senha precisa ter entre 6 e 15 caratcteres',
          }
        }
      },
    }, {
    sequelize,
  });
  this.addHook('beforeSave', async user => {
    user.password_hash = await bcryptjs.hash(user.password, 8);
  })
  return this;
  }
}
