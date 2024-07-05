// var express = require("express");
// var router = express.Router();

// var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

// module.exports = router;

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/jogadores", function (req, res) {
    medidaController.listarJogadores(req, res);
});

router.get("/media-acertos", function (req, res) {
    medidaController.mediaAcertos(req, res);
});

router.get("/classificacao", function (req, res) {
    medidaController.classificacao(req, res);
});

router.get("/ultimos-acertos-erros/:fk_usuario", function (req, res) {
    medidaController.ultimosAcertosErros(req, res);
});

// router.post('/salvar-resultados', medidaController.salvarResultados);

module.exports = router;
