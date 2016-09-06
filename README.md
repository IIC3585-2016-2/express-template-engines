Express Template Engines
===================


En express[1], un motor de plantillas le permite utilizar archivos de plantillas estáticas en su aplicación. En tiempo de ejecución, el motor de plantillas reemplaza variables en un archivo de plantilla con valores reales, y transforma la plantilla en un archivo HTML se envía al cliente

## Jade ##

Jade es un motor de plantillas de alto rendimiento fuertemente influenciado por [Haml](http://haml.info/) e implementado con el lenguaje Java para el nodejs.

Crear proyecto
```
mkdir jade_ejemplo0
cd jade_ejemplo0
```


Inicializar el proyecto
```
npm init
```

Adcionar dependencia de express
```
npm install express --save
```


Adicionar dependencia de jade
```
npm install jade --save
```

Adicionar dependencia para logger
```
npm install morgan --save
```



Definir el el template engine
```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
```

Definir rutas
```
var routes = require('./routes/index');
app.use('/', routes);
```


Plantilla con Jade en views
```
html
  head
    title!= title
  body
    h1!= message
```

Definicion de rutas en routs
```
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Jade Ejemplo', message: 'Jade Ejemplo - Fue pasado por parametro desde el router!'});
});


module.exports = router;
```

Iniciar Servidor
```
npm start
```

Probar plantilla
```
http://localhost:3000/
```


## Pug ##

Pug es un motor de plantillas de alto rendimiento fuertemente influenciado por Haml e implementado con el JavaScript para Node.js y navegadores. Para informes de errores, peticiones y preguntas, abrir un problema. Para la discusión unirse a la sala de chat.
Este proyecto era conocida anteriormente como "Jade". Sin embargo, se ha revelado que "Jade" es una marca registrada, y como resultado, se necesita un cambio de nombre. Tras un breve debate entre los mantenedores, "Pug" ha sido elegido como el nuevo nombre para este proyecto. La próxima versión principal llevará a "pug", como el nombre del paquete.

Crear proyecto
```
mkdir pug_ejemplo
cd pug_ejemplo
```


Inicializar el proyecto
```
npm init
```

Adcionar dependencia de express
```
npm install express --save
```


Adicionar dependencia de jade
```
npm install pug --save
```

Adicionar dependencia para logger
```
npm install morgan --save
```


Definir el el template engine
```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

Definir rutas
```
var routes = require('./routes/index');
app.use('/', routes);
```


Plantilla con Jade en views
```
html
  head
    title!= title
  body
    h1!= message
```

Definicion de rutas en routs
```
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Pug Ejemplo', message: 'Pug Ejemplo - Fue pasado por parametro desde el router!'});
});


module.exports = router;
```

Iniciar Servidor
```
npm start
```

Probar plantilla
```
http://localhost:3000/
```


See Template Engines (Express wiki) for a list of template engines you can use with Express. See also Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More.

## Mustache ##

Mustache es un _logic-less template syntax_. Puede ser utilizado para HTML, archivos de configuración, código fuente y etc. Funciona mediante tags que son expandidas utilizando los valores proporcionados en un hash o un objeto

## Dust ##

Observacion
```
Los motores de plantilla compatibles con Express como, por ejemplo, Jade exportan una función denominada __express(filePath, options, callback), 
que es invocada por la función res.render() para representar el código de plantilla.

Algunos motores de plantilla no siguen esta convención. La biblioteca Consolidate.js sigue esta convención correlacionando todos los motores 
de plantilla de Node.js  más conocidos, por lo que funciona de forma ininterrumpida en Express.
```



Comparacion


## Referencias ##


1. http://expressjs.com/es/guide/using-template-engines.html 
2. https://www.npmjs.com/package/jade
3. https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/?_ga=1.249538049.782897852.1473104247
4. https://github.com/pugjs/pug








