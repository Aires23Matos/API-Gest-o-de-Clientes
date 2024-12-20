/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contatos',
      {
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        telefone: {
          type:Sequelize.INTEGER,
          allowNull: false,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        web_site: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cliente_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'clientes',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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
     await queryInterface.dropTable('contatos');
  }
};

