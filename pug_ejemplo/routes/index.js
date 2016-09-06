var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;
