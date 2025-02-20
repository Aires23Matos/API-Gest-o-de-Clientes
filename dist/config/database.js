require('dotenv').config();
module.exports = {
  dialect: 'mariadb',
  host: "127.0.0.1",
  port: process.env.DATABASE_PORT,
  username: "root",
  password: '',
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};