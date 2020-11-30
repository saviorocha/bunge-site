var Instancia_ordem = require('../models/instanciaOrdem');

// Display list of all Instancias.
exports.instancia_ordem_list = function (req, res) {
    res.render('instancia_ordem_list', { title: 'NÃO IMPLEMENTADO: Instancia list' });
};

// Display detail page for a specific Instancia.
exports.instancia_ordem_detail = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia detail: ' + req.params.id);
};

// Display Instancia create form on GET.
exports.instancia_ordem_create_get = function (req, res) {
    res.render('instanica_ordem_form', { title: 'NÃO IMPLEMENTADO: Instancia create GET' });
};

// Handle Instancia create on POST.
exports.instancia_ordem_create_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia create POST');
};

// Display Instancia delete form on GET.
exports.instancia_ordem_delete_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia delete GET');
};

// Handle Instancia delete on POST.
exports.instancia_ordem_delete_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia delete POST');
};

// Display Instancia update form on GET.
exports.instancia_ordem_update_get = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia update GET');
};

// Handle Instancia update on POST.
exports.instancia_ordem_update_post = function (req, res) {
    res.send('NÃO IMPLEMENTADO: Instancia update POST');
};
