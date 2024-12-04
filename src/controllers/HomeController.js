import Cliente from "../models/cliente";
class HomeController{
  async index(req, res){
    const novoCliente = await Cliente.create({
      nome: 'Pedro',
      nif: 999999999,
    })
    res.json(novoCliente);
  }
}

export default new HomeController();
