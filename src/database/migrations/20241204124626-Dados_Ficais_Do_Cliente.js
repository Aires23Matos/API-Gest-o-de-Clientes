'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clientes',
      {
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome_cliente: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        nif:{
          type:Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }

    );
  },

  async down (queryInterface) {
     await queryInterface.dropTable('clientes');
  }
};
