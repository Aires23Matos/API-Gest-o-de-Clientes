import Morada from "../models/Morada";
import Endereco from "../models/endereco";
class MoradaController{
  async store(req, res){
   try{
    const {provicia, endereco} = req.body;
    const {cliente_id} = req.body;
    const novoUsuario = await Morada.create({provicia, endereco, cliente_id});
    res.json(novoUsuario);
  }catch(e){
    console.log(e);
    res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
    }
  }

  //Index
  async Index(req, res){
    try{
      const moradas = await Morada.findAll({
         attributes: ["id", "provincia","endereco"],
          order: [['id', 'DESC']],
          include: {
              model: Endereco,
          },
      });
      return res.json(moradas);
    }catch(e){
      return res.json(null);
    }
  }
  //Show
  async show(req, res){
    try{
      const {id} = req.params;
      const morada = await Morada.findByPk(id);
      return res.json(morada);
    }catch(e){
      return res.json(null);
    }
  }
  //Update
  async update(req, res){
    try{
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const morada = await Morada.findByPk(id);
      if(!morada){
        return res.status(400).json({
          errors: ['Morada não existe'],
        })
      }

      const novaMorada = morada.update(req.body);
      return res.json(novaMorada);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
  }
}

export default new MoradaController();
