var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Jade Ejemplo', message: 'Jade Ejemplo - Fue pasado por parametro desde el router!'});
});


module.exports = router;

