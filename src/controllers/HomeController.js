import Cliente from "../models/cliente";
class HomeController{
  async store(req, res){
    const novoCliente = await Cliente.create(req.body);
    res.json(novoCliente);
  }

  //Index
  async index(req, res){
    try{
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    }catch(e){
      return res.json(null);
    }
  }

  //Show
  async show(req, res){
    try{
      const {id} = req.params;
      const cliente = await Cliente.findByPk(id);
      return res.json(cliente);
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

      const cliente = await Cliente.findByPk(id);
      if(!cliente){
        return res.status(400).json({
          errors: ['Cliente não existe'],
        });
      }
      const novosClientes = cliente.update(req.body);
      return res.json(novosClientes);
    }catch(e){
      return res.status(400).json({
        errors: e.erros.map(err => err.message),
      });
    }
  }

  //Delete
  async delete(req, res){
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado.'],
        });
      }

      const cliente = await Cliente.findByPk(req.params.id);

      if(!cliente){
        return res.status(400).json({
          errors: ['Cliente não existe'],
        })
      }
      await cliente.destroy();
      return cliente.json(cliente);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new HomeController();
