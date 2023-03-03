var express = require('express');// Importamos la dependencia de express
var app = express();// Declaramos una App de express

var port = process.env.PORT || 3000;// Setteamos el puerto en el que va a escuchar el servidor

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});
//Usamos el metodo use para que se ejecute antes de que se ejecute cualquier otra cosa
//y asi poder ver en consola la url que estamos pidiendo


// Definimos la ruta raiz con el metodo get
app.get('/', function (req, res) {
    cad=`<!DOCTYPE html><html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/style.css" type="text/css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body> Hello World
        
    </body>
    </html>`;
    //ahora usamos una variable que es un string que contiene codigo html con los backtips
    //haciendo referencia a nuestra hoja de estilos de css

    res.send(cad)
    //la respuesta es un mensaje que hemos puesto en html, nuestra funcion es capaz de interpretar html
});

// Definimos la ruta /api con el metodo get
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' })// que nos de respuesta con un json
});

// Definimos la ruta person con el metodo get que sera capas de aceptar un parametro id
//que nosotros le vamos a pasar por la url del navegador
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
    //Ahora en esta respuesta es codigo html concadenado con el parametro id que le pasamos por la url
    //Asi que el mensaje sera algo que le asignemos
    
});

app.listen(port); //levantamos el server con nodemon y le decimos que puerto escuche
