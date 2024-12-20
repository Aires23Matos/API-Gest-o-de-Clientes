import Endereco from "../models/Endereco";

class EnderecoController {
  async store(req, res){
    const {provincia,municipio,bairro,rua_ou_avenida,numero_da_casa,ponto_de_referencia} = req.body;
    const {cliente_id} = req.body;
    const novoEndereco = await Endereco.create({provincia,municipio,bairro,rua_ou_avenida,numero_da_casa,ponto_de_referencia, cliente_id});
    res.json(novoEndereco);
  };

  //index
  async index(req, res){
    try{
      const enderecos = await Endereco.findAll();
      return res.json(enderecos);
    }catch(e){
      return res.json(null);
    }
  }

  //Show
  async show(req, res){
    try{
      const {id} = req.params;
      const endereco = await Endereco.findByPk(id);
      return res.json(endereco);
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
          errors: ['ID não enviado'],
        });
      }
      const endereco = await Endereco.findByPk(id);
      if(!endereco){
        return res.status.json({
          errors:['Endereco não existe']
        })
      }
      const novosEnderecos = endereco.update(req.body);
      return res.json(novosEnderecos);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new EnderecoController();
