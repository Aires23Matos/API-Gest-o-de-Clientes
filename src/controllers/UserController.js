import User from "../models/User";
class UserController{
  async store(req, res){
    const novoUsuario = await User.create({
      nome: 'Pedro',
      email: "aires18matos2@gmail.com",
      password: '123456'
    })
    res.json(novoUsuario);
  }
}

export default new UserController();
