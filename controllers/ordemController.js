var Ordem = require('../models/ordem');

// Display list of all Ordens.
exports.ordem_list = function (req, res) {
    res.render('ordem_list', { title: 'NÃO IMPLEMENTADO: Ordem list' })
    // res.send('NÃO IMPLEMENTADO: Ordem list');
};

// Display detail page for a specific Ordem.
exports.ordem_detail = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem detail: ' + req.params.id);
};

// Display Ordem create form on GET.
exports.ordem_create_get = function (req, res) {
    res.render('ordem_form', { title: 'NÃO IMPLEMENTADO: Ordem create GET' })
    // res.send('NÃO IMPLEMENTADO: Ordem create GET');
};

// Handle Ordem create on POST.
exports.ordem_create_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem create POST');
};

// Display Ordem delete form on GET.
exports.ordem_delete_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem delete GET');
};

// Handle Ordem delete on POST.
exports.ordem_delete_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem delete POST');
};

// Display Ordem update form on GET.
exports.ordem_update_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem update GET');
};

// Handle Ordem update on POST.
exports.ordem_update_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Ordem update POST');
};
