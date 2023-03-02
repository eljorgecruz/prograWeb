
//Inyectamos la dependencia de express para poder usarla
const express = require('express')
const app = express()

//Definimos la ruta raiz con el metodo get
//que nos de respuesta con un mensaje
app.get('/', function (req, res) {
  res.send('Hello World, this is the root route')
})

//Definimos la ruta uno con el metodo get

app.get('/uno', (req, res) => { //route handler
    res.send('Hello World, from route uno')
});

//Definimos la ruta prueba con el metodo get
//usamos backtips para poder insertar codigo html
//al momento de cargar el contenido de la ruta
//nos mostrara un mensaje y una imagen que esta escrito en html
app.get('/prueba', (req, res) => { //route handler
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Check it out</h1>
        <center><a href="http://www.fillster.com/cat-pictures/1/" target="_blank"><img src="http://www.fillster.com/images/pictures/32b.jpg" border="0" alt="Cat Pictures for Myspace"></a><br /><a href="http://www.fillster.com" target="_blank"><img src="http://www.fillster.com/images/lthumb.gif" border="0" alt="Myspace Layouts & HTML Codes"></a><br /><a style="font-size: 12px;" href="http://www.fillster.com/myspace-pictures/" target="_blank">Myspace Pictures</a></center>
    </html>`)
});


//usamos el metodo listen para que el servidor
//escuche en el puerto 3000
app.listen(3000)