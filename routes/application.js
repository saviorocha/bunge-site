let express = require('express');
let router = express.Router();

// Require controller modules.
let funcionario_controller = require('../controllers/funcionarioController');
let ordem_controller = require('../controllers/ordemController');
let instancia_ordem_controller = require('../controllers/instanciaOrdemController');

/// FUNCIONARIO ROUTES ///

// GET catalog home page.
router.get('/', funcionario_controller.index);

// GET funcionario login page
router.get('/funcionario/login', funcionario_controller.funcionario_login);

// GET request for creating a Funcionario. NOTE This must come before routes that display Funcionario (uses id).
router.get('/funcionario/create', funcionario_controller.funcionario_create_get);

// POST request for creating Funcionario.
router.post('/funcionario/create', funcionario_controller.funcionario_create_post);

// GET request to delete Funcionario.
router.get('/funcionario/:matricula/delete', funcionario_controller.funcionario_delete_get);

// POST request to delete Funcionario.
router.post('/funcionario/:matricula/delete', funcionario_controller.funcionario_delete_post);

// GET request to update Funcionario.
router.get('/funcionario/:matricula/update', funcionario_controller.funcionario_update_get);

// POST request to update Funcionario.
router.post('/funcionario/:matricula/update', funcionario_controller.funcionario_update_post);

// GET request for one Funcionario.
router.get('/funcionario/:matricula', funcionario_controller.funcionario_detail);

// GET request for list of all Funcionario items.
router.get('/funcionarios', funcionario_controller.funcionario_list);

/// ORDEM ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/ordem/create', ordem_controller.ordem_create_get);

// POST request for creating Author.
router.post('/ordem/create', ordem_controller.ordem_create_post);

// GET request to delete Author.
router.get('/ordem/:ordemId/delete', ordem_controller.ordem_delete_get);

// POST request to delete Author.
router.post('/ordem/:ordemId/delete', ordem_controller.ordem_delete_post);

// GET request to update Author.
router.get('/ordem/:ordemId/update', ordem_controller.ordem_update_get);

// POST request to update Author.
router.post('/ordem/:ordemId/update', ordem_controller.ordem_update_post);

// GET request for one Author.
router.get('/ordem/:ordemId', ordem_controller.ordem_detail);

// GET request for list of all Authors.
router.get('/ordens', ordem_controller.ordem_list);

/// INSTANCIAORDEM ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/instancia/create', instancia_ordem_controller.instancia_ordem_create_get);

//POST request for creating Genre.
router.post('/instancia/create', instancia_ordem_controller.instancia_ordem_create_post);

// GET request to delete Genre.
router.get('/instancia/:id/delete', instancia_ordem_controller.instancia_ordem_delete_get);

// POST request to delete Genre.
router.post('/instancia/:id/delete', instancia_ordem_controller.instancia_ordem_delete_post);

// GET request to update Genre.
router.get('/instancia/:id/update', instancia_ordem_controller.instancia_ordem_update_get);

// POST request to update Genre.
router.post('/instancia/:id/update', instancia_ordem_controller.instancia_ordem_update_post);

// GET request for one Genre.
router.get('/instancia/:id', instancia_ordem_controller.instancia_ordem_detail);

// GET request for list of all Genre.
router.get('/instancias', instancia_ordem_controller.instancia_ordem_list);

module.exports = router;