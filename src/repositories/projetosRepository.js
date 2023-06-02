const { pool } = require('../config/db');

exports.getAllProjetos = async (req, res) => {
    const result = await pool.query('SELECT * FROM projetos');
    return result.rows;
  };

exports.getProjetoById = async (id) => {
  const result = await pool.query('SELECT * FROM projetos WHERE id = $1', [id]);
  return result.rows[0];
};

exports.createProjeto = async (projeto) => {
  const result = await pool.query(`
   INSERT INTO projetos (nome, descricao, link)
   VALUES ($1, $2, $3)
   RETURNING *`,
   [projeto.nome, projeto.descricao, projeto.link]);
   return result.rows[0];
};

exports.updateProjeto = async(id, projeto) => {
  const result = await pool.query(`
    UPDATE projetos
    SET nome = $1, descricao = $2, link = $3
    WHERE id = $4
    RETURNING *
    `,
    [projeto.nome, projeto.descricao, projeto.link, id]);
    return result.rows[0];
};
exports.deleteProjeto = async (id) => {
  await pool.query('DELETE FROM projetos WHERE id = $1', [id]);
}