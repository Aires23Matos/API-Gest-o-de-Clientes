import Cliente from "../models/cliente";
class DadosLicencaController{
  async index(req, res){
    const novoDadoLicenca = await Cliente.create({
    })
    res.json(novoDadoLicenca);
  }
}

export default new DadosLicencaController();
