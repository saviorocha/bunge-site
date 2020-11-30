let Funcionario = require('../models/funcionario');
let Ordem = require('../models/ordem');
let InstanciaOrdem = require('../models/instanciaOrdem');

let debug = require('debug')('funcionario');
let async = require('async');

const { body, validationResult } = require('express-validator');

exports.index = function (req, res) {
    async.parallel({
        funcionario_count: function (callback) {
            Funcionario.countDocuments({}, callback);
        },
        ordem_count: function (callback) {
            Ordem.countDocuments({}, callback);
        },
        instanciaOrdem_count: function (callback) {
            InstanciaOrdem.countDocuments({}, callback);
        }
    },
        function (err, results) {
            res.render('index', { title: 'Bem vindo!', error: err, data: results });
        });
};

// Display list of all Funcionarios.
exports.funcionario_list = function (req, res, next) {
    Funcionario.find()
        .sort([['nome', 'ascending']])
        .exec(function (err, list_funcionarios) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('funcionario_list', { title: 'Lista de funcionários cadastrados', funcionario_list: list_funcionarios });
        });
};

// Display detail page for a specific Funcionario.
exports.funcionario_detail = function (req, res) {
    Funcionario.find({ matricula: req.params.matricula })
        .exec(function (err, funcionario) {
            debug('funcionario: ' + funcionario);   
            if (err) { return next(err); }
            res.render('funcionario_detail', { title: 'Funcionario detail', funcionario: funcionario[0] })
        });
};

exports.funcionario_login = function (req, res) {
    res.render('funcionario_login');
}

// Display Funcionario create form on GET.
exports.funcionario_create_get = function (req, res) {
    res.render('funcionario_form', { title: 'Cadastrar funcionário' });
};

// Handle Funcionario create on POST.
exports.funcionario_create_post = [

    // Validate and sanitise fields.
    body('nome').trim().isLength({ min: 1 }).escape().withMessage('Nome precisa ser especificado'),
    body('matricula').trim().isLength({ min: 1 }).escape().withMessage('Matrícula precisa ser especificada')
        .isNumeric().withMessage('Matricula precisa conter apenas números'),
    body('senha').trim().isLength({ min: 1 }).escape().withMessage('Senha precisa ser especificada'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('funcionario_form', { title: 'Cadastrar funcionário', funcionario: req.body, errors: errors.array() });
            return;
        } else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.

            Funcionario.find({ matricula: req.body.matricula })
                .exec(function (err, func) {
                    if (err) { return next(err); }
                    if (func[0]) {
                        res.render('funcionario_form', { title: 'Cadastrar funcionário', funcionario: req.body, error_matricula: 'Já exite um funcionário cadastrado com esta matrícula' });
                    } else {
                        let funcionario = new Funcionario(
                            {
                                nome: req.body.nome,
                                setor: req.body.setor,
                                matricula: req.body.matricula,
                                senha: req.body.senha
                            }
                        );

                        funcionario.save(function (err) {
                            if (err) { return next(err); }
                            // Successful - redirect to new funcionario record.
                            res.redirect(funcionario.url);
                        });
                    }
                });
        }
    }
];

// Display Funcionario delete form on GET.
exports.funcionario_delete_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Funcionario delete GET');
};

// Handle Funcionario delete on POST.
exports.funcionario_delete_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Funcionario delete POST');
};

// Display Funcionario update form on GET.
exports.funcionario_update_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Funcionario update GET');
};

// Handle Funcionario update on POST.
exports.funcionario_update_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Funcionario update POST');
};
