import DadosLicenca from "../models/DadosLicenca";
class DadosLicencaController{
  async store(req, res){
   try{
    const {tecnico, data_da_instalacao, hora_de_formacao, validade_em_mes, data_da_ativacao, data_da_expiracao, estado_da_licenca, conta_pago, valor_pago} = req.body;
    const {cliente_id} = req.body;
    const novoDadoLicenca = await DadosLicenca.create({tecnico, data_da_instalacao, hora_de_formacao, validade_em_mes, data_da_ativacao, data_da_expiracao, estado_da_licenca, conta_pago, valor_pago, cliente_id});
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
