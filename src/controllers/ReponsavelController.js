import Responsavel from "../models/Responsavel";

class ResponsavelController{
  async store(req, res){
    try{
      const novoResponsavel = await Responsavel.create({
        nome: 'Aires',
        telefone: 999999999,
        email: 'aires@gmail.com',
      });
      res.json(novoResponsavel);
    }catch(e){
      console.log(e);
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  };
};

export default  new ResponsavelController();

