import Contatos from "../models/Contatos";

class ContatosController{
  async store(req, res){
   try{
    const novoContatos = await Contatos.create({
      telefone: 999999999,
      web_site: "ww.com"
    });
    res.json(novoContatos);
  }catch(e){
    console.log(e);
    res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
}
}

export default new ContatosController();
