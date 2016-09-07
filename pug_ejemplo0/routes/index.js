var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Pug Ejemplo', message: 'Pug Ejemplo - Fue pasado por parametro desde el router!'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Detalles' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacto' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Nosotros' });
});

//
router.get('/layout', function (req, res) {
  res.render('layout', { title: 'Template Inheritance', message: 'Template Inheritance  layout!'});
});

router.get('/sublayout', function (req, res) {
  res.render('sub-layout', { title: 'Template Inheritance', message: 'Template Inheritance  Sub Layout!'});
});

router.get('/page', function (req, res) {
  res.render('page', { title: 'Template Inheritance', message: 'Template Inheritance block append head!'});
});

router.get('/pets', function (req, res) {
  res.render('page-a', { title: 'Lista de Pets', message: 'Lista de pets!'});
});

router.get('/pageb', function (req, res) {
  res.render('page-b', { title: 'Template Inheritance', message: 'Template Inheritance  B!'});
});

router.get('/layout2', function (req, res) {
  res.render('layout2', { title: 'Template Inheritance', message: 'Template Inheritance  layout 2!'});
});

router.get('/includes', function (req, res) {
  res.render('includes', { title: 'Pug Includes', message: 'Pug Includes!'});
});

router.get('/attributes', function (req, res) {
  res.render('attributes', { title: 'Pug Atributes', message: 'Pug Atributes!'});
});

router.get('/case', function (req, res) {
  res.render('case', { title: 'Pug Case', message: 'Aplicacion de Ejemplo de NodeJS con Express '});
});

router.get('/code', function (req, res) {
  res.render('code', { title: 'Pug Code', message: 'Aplicacion de Ejemplo de NodeJS con Express '});
});

router.get('/conditionals', function (req, res) {
  res.render('conditionals', { title: 'Pug Conditionals', message: 'Aplicacion de Ejemplo de NodeJS con Express '});
});

router.get('/filters', function (req, res) {
  res.render('filters', { title: 'Pug Filters', message: 'Aplicacion de Ejemplo de NodeJS con Express '});
});
//controle


module.exports = router;

