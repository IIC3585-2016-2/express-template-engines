Express Template Engines
===================


En express[1], un motor de plantillas le permite utilizar archivos de plantillas estáticas en su aplicación. En tiempo de ejecución, el motor de plantillas reemplaza variables en un archivo de plantilla con valores reales, y transforma la plantilla en un archivo HTML que se envía al cliente.

# Pug/Jade #

Pug es un motor de plantillas de alto rendimiento fuertemente influenciado por Haml e implementado con el JavaScript para Node.js y navegadores. Este proyecto era conocido anteriormente como "Jade", pero "Jade" es una marca registrada y el proyecto cambió de nombre. La próxima versión principal llevará a "pug", como el nombre del paquete.

## Language References ##

Pug posee una serie de comandos para soportar la creacion de plantillas, con opciones para extender otras plantillas asi como incluir otras plantillas para componer un layout, asi como funciones para el control de flujo y estado.

### Attributes ###

Los atributos son los mismos de html pero con la sintaxis de JS

```javascript
a(href='google.com') Google
= '\n'
a(class='button' href='google.com') Google
= '\n'
a(class='button', href='google.com') Google
```

## Template Inheritance ##


### Extends y Block ###

The extends keyword allows a template to extend a layout or parent template. It can then override certain pre-defined blocks of content.

Un **block** es simplemente un "bloque" que puede ser sustituido dentro de una plantilla hija. Este proceso es recursivo
```javascript
html
  head
    title My Site - #{title}
    link(rel='stylesheet', href='/bootstrap/css/bootstrap.min.css')
    link(rel='stylesheet', href='/bootstrap/css/bootstrap-responsive.min.css')
    link(rel='stylesheet', href='/stylesheets/style.css')
    block scripts
      script(src='/bootstrap/js/bootstrap.min.js')
      script(src='/javascripts/jquery-3.1.0.min.js')
  body
    block content
    block foot
      .container.navbar-fixed-bottom.panel-footer
        footer.footer
          p © Taller de Aplicaciones en Plataformas Moviles | IIC3380 - Sección 1 | 2' 2016
```


Para extender la plantilla, hay que crear una nueva plantilla como Pug y usar Extends
```javascript
extends layout.pug

block scripts
  script(src='/jquery.js')
  script(src='/pets.js')

block content
  .container
    .jumbotron
      h1 Pug usando variables
        p
          | Aplicacion de Ejemplo de NodeJS con Express y Jade.

    h2 Lista de Pets
    - var pets = ['cat', 'dog']
    ul.list-group
      each petName in pets
        include pet.pug
```

### Case ###
La declaración de _Case_ es similar al  switch de JavaScript.
```javascript
extends layout.pug

block content
    .container
        .jumbotron
            h1=title
                p=message+' y '+title


            h2 Case
            - var friends = 10
            case friends
                when 0
                    p you have no friends
                when 1
                    p you have a friend
                default
                    p you have #{friends} friends

            h2 Case Fall Through
            - friends = 0
            case friends
                when 0
                when 1
                    p you have very few friends
                default
                    p you have #{friends} friends

            h2 Case with break
            - var friends = 0
            case friends
                when 0
                    - break
                when 1
                    p you have very few friends
                default
                    p you have #{friends} friends
```
Las condiciones son atendidas segun el valor del when, tambien se puede o en verdad se debe utilizar el break para cuando no se desea renderizar nada ´para un dado valor

### Code ###

Pug hace que sea posible escribir código JavaScript en línea en sus plantillas. Hay tres tipos de código

#### Unbuffered Code ####
Empeza con **-** y no anade ninguna salida
```javascript
- list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
```

#### Buffered Code ####
Empeza con **=** como salida va el resultado de la evaluación de la expresión de JavaScript en la plantilla. Para mayor seguridad, es la primera de escape HTML
```javascript
p= 'This code is' + ' <escaped>!'
```


#### Unescaped Buffered Code ####
comienza con! = y envía el resultado de la evaluación de la expresión de JavaScript en la plantilla. Esto no hace ningún escape, por lo que no es seguro para la entrada del usuario
```javascript
p
  != 'This code is <strong>not</strong> escaped!'
```

## Conditionals ## 

### If ... Else ###
Se puede utilizar el condicional **if ... else** para controlar la renderizacion 

```javascript
- var user = { name:'quelves', description: 'foo bar baz' }
- var authorised = false
#user
  if user.description
    h2.green Description
    p.description= user.description
  else if authorised
    h2.blue Description
    p.description.
      User has no description,
      why not add one...
  else
    h2.red Description
    p.description User has no description
```

### unless ###

Se puedo utilizar **unless** para negar una condicion

```javascript
unless user.isAnonymous
  p You're logged in as #{user.name}
```

## Filters ##

Los filtros permiten usar otros idiomas dentro de una plantilla Pug, Todos los módulos JSTransformer se pueden usar como filtros de Pug. filtros populares incluyen :babel, :uglify-js, :scss, y :markdown-it

Para usar markdown
```shellscript
npm install --save jstransformer-markdown-it
```

En la plantilla PUG usar
```js
:markdown-it(linkify langPrefix='highlight-')
  # Markdown

  Markdown document with http://links.com and


```

##  Interpolation ##
Pug prove os operadores para una variedad de sus necesidades diferentes de interpolación

### String Interpolation, Escaped ###
Tenga en cuenta la ubicación de los locales **title, author, and theGreat** de la plantilla, title, author, and theGreat en la siguiente plantilla
```js
- var title = "On Dogs: Man's Best Friend";
- var author = "enlore";
- var theGreat = "<span>escape!</span>";

h1= title
p Written with love by #{author}
p This will be safe: #{theGreat}
```

**title** sogie el padron basico para evaluar una plantilla local, pero el código entre **#{ and }** es evaluada, aplicado el escape y el resultado es bufferizado en la plantilla


### String Interpolation, Unescaped ###

### Tag Interpolation  ###

### Whitespace Control ###




## Build Pug Project ##

Crear proyecto
```javascript
mkdir pug_ejemplo
cd pug_ejemplo
```

Inicializar el proyecto
```javascript
npm init
```

Adcionar dependencia de express
```javascript
npm install express --save
```

Adicionar dependencia de jade
```javascript
npm install pug --save
```

Adicionar dependencia para logger
```javascript
npm install morgan --save
```

Definir el el template engine
```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

Definir rutas
```javascript
var routes = require('./routes/index');
app.use('/', routes);
```

Plantilla con Jade en views
```javascript
html
  head
    title!= title
  body
    h1!= message
```

Definicion de rutas en routs
```javascript
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Pug Ejemplo', message: 'Pug Ejemplo - Fue pasado por parametro desde el router!'});
});


module.exports = router;
```

Iniciar Servidor
```javascript
npm start
```

Probar plantilla
```javascript
http://localhost:3000/
```



## Mustache ##

Mustache es un _logic-less template syntax_. Puede ser utilizado para HTML, archivos de configuración, código fuente y etc. Funciona mediante tags que son expandidas utilizando los valores proporcionados en un hash o un objeto

Mustache.js es una implementación del sistema de plantillas [Mustache] (Mustache) en JavaScript.

Lo llamamos "logic-less" porque no existen declaraciones IF. En su lugar sólo hay etiquetas. Algunas etiquetas se reemplazan con un valor, algunos nada, y otros una serie de valores

```js
<div class="post">
  <h1>By {{fullName author}}</h1>
  <div class="body">{{body}}</div>
 
  <h1>Comments</h1>
 
  {{#each comments}}
    <h2>By {{fullName author}}</h2>
    <div class="body">{{body}}</div>
  {{/each}}
</div>
1
2
3
var mustache = require('mustache');
var template = mustache.compile('string of mustache');
var result = template(locals);
```


## Dust ##

Observación
```
Los motores de plantilla compatibles con Express como, por ejemplo, Jade exportan una función denominada __express(filePath, options, callback), 
que es invocada por la función res.render() para representar el código de plantilla.

Algunos motores de plantilla no siguen esta convención. La biblioteca Consolidate.js sigue esta convención correlacionando todos los motores 
de plantilla de Node.js  más conocidos, por lo que funciona de forma ininterrumpida en Express.
```



Comparación
Para unicar una comparación simple, se tomó en cuenta la actividad que tiene cada motor en su repositorio de desarrollo, en este resultado se puede ver que Jade es el proyecto más activo, según datos del 2014.

NAME	        STARS	  FORKS	  COMMITS	  CONTRIBUTORS	GITHUB SCORE
Jade	        7,335	  1,136	  1,968	    135	            118
Mustache.js	  6,985	  1,464	  514	      55	            95
Dust.js	      1,571	  293	    697	      28	            28
Nunjucks	    1,565	  115	    525	      40	            26
EJS	          1,796	  289	    221	      24              25

## Referencias ##


1. http://expressjs.com/es/guide/using-template-engines.html 
2. https://www.npmjs.com/package/jade
3. https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/?_ga=1.249538049.782897852.1473104247
4. https://github.com/pugjs/pug
5. https://pugjs.org/api/getting-started.html









