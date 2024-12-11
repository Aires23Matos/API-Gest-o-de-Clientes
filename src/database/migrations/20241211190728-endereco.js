'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('endereco', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      provincia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua_ou_avenida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_da_casa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ponto_de_referencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('endereco');
  }
};