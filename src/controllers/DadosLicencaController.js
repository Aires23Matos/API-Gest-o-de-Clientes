import DadosLicenca from "../models/DadosLicenca";
class DadosLicencaController{
  async store(req, res){
   try{
    const novoDadoLicenca = await DadosLicenca.create({
      tecnico: "Rafael",
      data_da_instalacao: '23-4-2024',
      hora_de_formacao: 2,
      validade_em_mes: 12,
      data_da_ativacao: '23/04/2024',
      data_da_expiracao: '23/04/2025',
      estado_da_licenca: 'activo',
      conta_pago: 12.0000,
      valor_pago: 12000
    });

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
