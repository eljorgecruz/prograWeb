var express = require('express');// Importamos la dependencia de express
var app = express();// Declaramos una App de express

var port = process.env.PORT || 3000;// Setteamos el puerto en el que va a escuchar el servidor

app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.set('view engine', 'ejs');


//Definimos la ruta raiz con el metodo get
app.get('/', function (req, res) {
    //aqui usamos el metodo send para enviar un mensaje html al navegador
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="/assets/style.css" type="text/css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola mundo</h1>
        <p>Este es un parrafo y su contenido debe ser azul</p>
    </body>
    </html>`);
});

// Definimos la ruta person con el metodo get que sera capas de aceptar un parametro id, message y times
//que nosotros le vamos a pasar por la url del navegador
//para que el servidor nos responda con un mensaje personalizado
//que se renderizara en la pagina person.ejs
app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, Message: req.query.message, Times: req.query.times });
});

app.listen(port);// Escuchamos el puerto que definimos en la variable port
