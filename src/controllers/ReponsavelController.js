import Responsavel from "../models/Responsavel";

class ResponsavelController{
  async store(req, res){
    try{
      const novoResponsavel = await Responsavel.create(req.body);
      res.json(novoResponsavel);
    }catch(e){
      console.log(e);
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  };

  //Index
  async index(req, res){
    try{
      const responsavel = await Responsavel.findAll();
      return res.json(responsavel);
    }catch(e){
      return res.json(null);
    }
  }

  //Show
  async show(req, res){
    try{
      const {id} = req.params;
      const responsaveis = await Responsavel.findByPk(id);
      return res.json(responsaveis);
    }catch(e){
      return res.json(null);
    }
  }

  //Update
  async update(req, res){
    try{
      const {id} =req.params;
      if(!id){
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const responsavel = await Responsavel.findByPk(id);
      if(!responsavel){
        return res.status(400).json({
          errors: ['A tabela responsavel não existe'],
        });
      }

      const novoResponsavel = responsavel.update(req.body);
      return res.json(novoResponsavel);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
};

export default  new ResponsavelController();

