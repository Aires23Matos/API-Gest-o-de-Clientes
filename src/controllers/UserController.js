import User from "../models/User";
class UserController{
  async index(req, res){
    const novoCliente = await User.create({
      nome: 'Pedro',
      
    })
    res.json(novoCliente);
  }
}

export default new UserController();
