import DadosLicenca from "../models/DadosLicenca";
class DadosLicencaController{
  async store(req, res){
   try{
    const novoDadoLicenca = await DadosLicenca.create(req.body);
    res.json(novoDadoLicenca);
   }catch(e){
    console.log(e);
    res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
   }
  }

  //index
  async index(req,res){
    try{
      const dadosLicencas = await DadosLicenca.findAll();
      return res.json(dadosLicencas);
    }catch(e){
      return res.json(null);
    }
  }

  //Show
  async Show(req, res){
    try{
      const {id} = req.params;
      const dadosLicenca = await DadosLicenca.findByPk(id);
      return res.json(dadosLicenca);
    }catch(e){
      return res.json(null);
    }
  }

  //Update
  async Update(req, res){
    try{
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['ID não enviado.']
        });
      }

      const dadosLicenca = await DadosLicenca.findByPk(id);
      if(!dadosLicenca){
        return res.status(400).json({
          errors: ['Dados da Licença não existe'],
        });
      }

      const novosDadosLicenca = dadosLicenca.update(req.body);
      return res.json(novosDadosLicenca);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new DadosLicencaController();
