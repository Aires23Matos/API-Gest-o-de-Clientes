import Contatos from "../models/Contatos";

class ContatosController{
  async store(req, res){
   try{
    const novoContatos = await Contatos.create(req.body);
    res.json(novoContatos);
  }catch(e){
    console.log(e);
    res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
}

//Index
async index(req, res){
  try{
    const contatos = await Contatos.findAll();
    return res.json(contatos);
  }catch(e){
    return res.json(null);
  }
}

//Show
async Show(req,res){
  try{
    const {id} = req.params
    const contato = await Contatos.findByPk(id);
    return res.json(contato);
  }catch(e){
    return res.json(null);
  }
}

//update
async update(req,res){
  try{
    const {id} = req.params;
    if(!id){
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }
    const contatos = await Contatos.findByPk(id);
    if(!contatos){
      return res.status(400).json({
        errors: ['Contato não existe'],
      })
    }

    const novoContatos = contatos.update(req.body);
    return res.json(novoContatos);
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    })
  }
}
}

export default new ContatosController();
