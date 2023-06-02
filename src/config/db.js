require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool ({ 
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
});

const initDatabase = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS projetos (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL
)`
);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL);
`);
    console.log('Banco de dados inicializado.')
      };

module.exports = { pool, initDatabase };