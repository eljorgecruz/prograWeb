var express = require('express');// Importamos la dependencia de express
var app = express();// Declaramos una App de express

var port = process.env.PORT || 3000;// Setteamos el puerto en el que va a escuchar el servidor

app.set('view engine', 'ejs');// Setteamos el motor de plantillas que vamos a usar

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});
//Usamos el metodo use para que se ejecute antes de que se ejecute cualquier otra cosa
//y asi poder ver en consola la url que estamos pidiendo


// Definimos la ruta raiz con el metodo get
app.get('/', function (req, res) {
    res.render('index');
    //Ahora usamos la palabra render porque el 'template engine' que estamos usando es ejs
    // que nos de respuesta con el archivo index.ejs
});

// Definimos la ruta /api con el metodo get
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' })// que nos de respuesta con un json
});

// Definimos la ruta person con el metodo get que sera capas de aceptar un parametro id
//que nosotros le vamos a pasar por la url del navegador
app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id});
    //pasamos el key:value de ID: req.params.id para que el archivo person.ejs pueda acceder a ese valor
    
});

let data = [
    { id: 1, nombre: "Hugo" , apellido: "Estrada Ramirez", edad: 19 },
    { id: 2, nombre: "Leandro" , apellido: "Soriana Mercado", edad: 18 },
    { id: 3, nombre: "Sabrina" , apellido: "Contreras Garcia", edad: 17 },
];

app.get('/personas', function (req, res) {
    res.render('personas', {personas: data});
    //pasamos el key:value de personas: data para que el archivo personas.ejs pueda acceder a ese valor
})

app.listen(port); //levantamos el server con nodemon y le decimos que puerto escuche