require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  //define
  //usar os campos de registros criando na tabela
  //para saber quando m registro foi criado na tabela e quando um registro foi atualizado na tabela
  define: {
    timestamps: true,
    underdcored: true,
    undefinedAll: true,
    'createdAt': 'creates_at',
    'updatedAt': 'updated_at'
  },
  dialectOptions: {
    timezone: 'Africa/Luanda', // Use um timezone válido
  },
  timezone: 'Africa/Luanda',
}
