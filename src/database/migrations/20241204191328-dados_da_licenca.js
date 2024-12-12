/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dados_licencas',
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
          type:Sequelize.STRING,
          allowNull: false,
        },
        hora_de_formacao:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        validade_em_mes:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        data_da_ativacao: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        data_da_expiracao: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        estado_da_licenca: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        conta_pago: {
          type:Sequelize.FLOAT(10, 2),
          allowNull: false,
        },
        valor_pago: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        cliente_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'clientes',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
      }
    );
  },

  async down (queryInterface) {
     await queryInterface.dropTable('dados_licencas');
  }
};



