const database = require('../database/config');

function listarJogadores() {
	const instrucaoSql = 'SELECT nome FROM usuario';
	return database.executar(instrucaoSql);
}

function calcularMediaAcertos() {
	const instrucaoSql = 'SELECT AVG(acertos) AS media_acertos FROM Resposta';
	return database.executar(instrucaoSql);
}

function obterClassificacao() {
	const instrucaoSql = `
        SELECT usuario.nome, Resposta.acertos
        FROM Resposta
        JOIN usuario ON Resposta.fk_usuario = usuario.id
        ORDER BY Resposta.acertos DESC
    `;
	return database.executar(instrucaoSql);
}

function obterUltimosAcertosErros(fk_usuario) {
    const instrucaoSql = `
        SELECT acertos, erros
        FROM Resposta
        WHERE fk_usuario = '${fk_usuario}'
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listarJogadores,
    calcularMediaAcertos,
    obterClassificacao,
    // salvarResultados,
    obterUltimosAcertosErros
};
