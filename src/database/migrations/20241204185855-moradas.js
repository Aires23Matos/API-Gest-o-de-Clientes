/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('moradas',
      {
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        provincia: {
          type:Sequelize.STRING,
          allowNull: false,
        },
        endereco:{
          type: Sequelize.STRING,
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
     await queryInterface.dropTable('moradas');
  }
};
