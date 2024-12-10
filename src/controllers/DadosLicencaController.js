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
}

export default new DadosLicencaController();
