import User from "../models/User";
class UserController{
  async store(req, res){
   try{
    const novoUsuario = await User.create(req.body)
    return res.json(novoUsuario);
  }catch(e){
    console.log(e);
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
}
//Index
async index(req, res) {
  try{
    const users = await User.findAll();
    return res.json(users);
  }catch(e){
    return res.json(null);
  }
}
//Show
async show(req, res) {
  try{
    const {id} = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
  }catch(e){
    return res.json(null);
  }
}

//update
async Update(req, res) {
  try{
    const {id} = req.params;
    if(!id){
      return res.status(400).json({
        errors: ['ID não enviado.'],
      });
    }
    const user = await User.findByPk(id);
    if(!user){
      return res.status(400).json({
        errors: ['Usuario não existe'],
      });
    }

    const novosDados = user.update(req.body);
    return res.json(novosDados);
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
}
}

export default new UserController();
