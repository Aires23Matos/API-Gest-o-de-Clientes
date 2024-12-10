/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dados_da_licenca',
      {
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        tecnico: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_da_instalacao: {
          type:Sequelize.DATE,
          allowNull: false,
        },
        hora_de_formacao:{
          type: Sequelize.TIME,
          allowNull: false,
        },
        validade_em_mes:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        data_da_ativacao: {
          type:Sequelize.DATE,
          allowNull: false,
        },
        data_da_expiracao: {
          type:Sequelize.DATE,
          allowNull: false,
        },
        estado_da_licenca: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        conta_pago: {
          type:Sequelize.BOOLEAN,
          allowNull: false,
        },
        valor_pago: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
      }

    );
  },

  async down (queryInterface) {
     await queryInterface.dropTable('dados_da_licenca');
  }
};



