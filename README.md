Express Template Engines
===================


En express[1], un motor de plantillas le permite utilizar archivos de plantillas estáticas en su aplicación. En tiempo de ejecución, el motor de plantillas reemplaza variables en un archivo de plantilla con valores reales, y transforma la plantilla en un archivo HTML se envía al cliente

## Preparar entorno ##

```
npm install express-generator -g
```



## Jade ##

Jade es un motor de plantillas de alto rendimiento fuertemente influenciado por [Haml](http://haml.info/) e implementado con el lenguaje Java para el nodejs.

### Vantajas ###
No closing tags
White space significant indentation
Extensive layout inheritance
Macros support
Plain old school includes
Built in support for Markdown, CoffeeScript and others
Available implementations in php, scala, ruby, python and java.

C

Inicializar el proyecto
```
express jade_ejemplo
```




Install Jade

## Pug ##

Pug es un motor de plantillas de alto rendimiento fuertemente influenciado por Haml e implementado con el JavaScript para Node.js y navegadores. Para informes de errores, peticiones y preguntas, abrir un problema. Para la discusión unirse a la sala de chat.
Este proyecto era conocida anteriormente como "Jade". Sin embargo, se ha revelado que "Jade" es una marca registrada, y como resultado, se necesita un cambio de nombre. Tras un breve debate entre los mantenedores, "Pug" ha sido elegido como el nuevo nombre para este proyecto. La próxima versión principal llevará a "pug", como el nombre del paquete.

Instalacion
```
npm install pug
```




See Template Engines (Express wiki) for a list of template engines you can use with Express. See also Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More.

## Mustache ##

Mustache es un _logic-less template syntax_. Puede ser utilizado para HTML, archivos de configuración, código fuente y etc. Funciona mediante tags que son expandidas utilizando los valores proporcionados en un hash o un objeto

## Dust ##

Comparacion


## Referencias ##
* http://expressjs.com/es/guide/using-template-engines.html 
* https://www.npmjs.com/package/jade
* https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/?_ga=1.249538049.782897852.1473104247
* https://github.com/pugjs/pug








