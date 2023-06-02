const projetosRepository = require('../repositories/projetosRepository')
exports.getAllProjetos = async (req, res) => {
    const projetos = await projetosRepository.getAllProjetos();
    res.json(projetos);
};

exports.getProjetoById = async (req, res) => {
    const id = parseInt (req.params.id);
    const projeto = await projetosRepository.getProjetoById(id);
    res.json(projeto);
};

exports.createProjeto = async(req, res) => {
    const projeto = req.body;
    const newProjeto = await projetosRepository.createProjeto(projeto);
    res.json(newProjeto);
};

exports.updateProjeto = async(req, res) => {
    const id = parseInt(req.params.id);
    const projeto = req.body;
    const updatedProjeto = await projetosRepository.updateProjeto(id, projeto);
    res.json(updatedProjeto);
};

exports.deleteProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    await projetosRepository.deleteProjeto(id);
    res.json({message: `Projeto ${id} deletado.`})
};