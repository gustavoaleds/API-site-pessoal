require('dotenv').config();
const express = require('express');
const { initDatabase } = require('./config/db');
const cors = require('cors');

const projetosRoute = require('./routes/projetosRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
  res.send('Seja bem vindo a API de meu Site Pessoal!');
});

app.use(cors());

app.use(express.json());

app.use('/api/projetos', projetosRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

