var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Pug Ejemplo', message: 'Pug Ejemplo - Fue pasado por parametro desde el router!'});
});


module.exports = router;

