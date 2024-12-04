import Morada from "../models/Morada";
class MoradaController{
  async store(req, res){
   try{
    const novoUsuario = await Morada.create({
      provincia: 'Luanda',
      endereco: 'Viana/estalagem'
    })
    res.json(novoUsuario);
  }catch(e){
    console.log(e);
    res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
}
}

export default new MoradaController();
