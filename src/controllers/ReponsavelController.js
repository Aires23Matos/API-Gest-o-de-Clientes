import Responsavel from "../models/Responsavel";

class ResponsavelController{
  async store(req, res){
    try{
      const novoResponsavel = await Responsavel.create({

      });
      res.json(novoResponsavel)
    }catch(e){
      console.log(e);
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default  new ResponsavelController();

