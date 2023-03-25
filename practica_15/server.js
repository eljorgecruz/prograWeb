var express = require('express');// Importamos la dependencia de express
var app = express();// Declaramos una App de express

var port = process.env.PORT || 3000;// Setteamos el puerto en el que va a escuchar el servidor

app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.use(express.urlencoded({ extended: false })); //para poder usar el body creamos la declaracion para parsearla

app.set('view engine', 'ejs');



// Definimos la ruta student con el metodo get 
app.get('/student', function(req, res) {
    let t=req.params.id;
    res.render('student');// Renderizamos la vista student que es un formulario que nos permite ingresar datos
    // porque utlizamos las propiedades de express para parsear el body podemos acceder a los datos del formulario
});

// Definimos la ruta addStudent con el metodo post
//en este caso no renderizamos una vista, sino que enviamos un mensaje con los datos del formulario
// que definimos en la vista student 
// solo podemos usar una de las dos opciones, o renderizar una vista o enviar un mensaje
// app.post('/addStudent', function(req, res) {
//     res.send(`  Nombre: ${req.body.nombre}
//                 Edad: ${req.body.edad}
//                 NSS: ${req.body.nss}
//                 Tipo de sangre: ${req.body.tipoSangre}`);
// });

//aqui mandamos los datos del formulario a la vista displayData
// para que renderice los datos en la vista que le hemos enviado
app.post('/addStudent', function(req, res) {
    res.render('displayData', { nombre: req.body.nombre,
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
});

app.listen(port);// Escuchamos el puerto que definimos en la variable port