import e from "express";
import Endereco from "../models/endereco";

class EnderecoController {
  async store(req, res){
    const novoEndereco = await Endereco.create(req.body)
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
}

export default new EnderecoController();
