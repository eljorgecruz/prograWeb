const express = require('express');
//inyectamos el modulo express
const app = express();
// app que hace la funcion de servidor

//declaramos las rutas que vamos a utilizar
let personsRoute = require('./routes/person');

app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

//indicamos que se va a Parsear las peticiones con URL Encoded
app.use(express.urlencoded({ extended: false }));

// idicamos que se va a Parsear las peticiones con JSON
app.set('view engine', 'ejs');
app.use(personsRoute);
//app.use(studentRoute);

//Definimos el puerto que vamos a utilizar
const PORT = process.env.PORT || 3000;

//Levantamos el servidor en el puerto 3000 a la escucha de peticiones
app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000');
});

// en general este refactor es para que el codigo sea mas legible y mantenible
// ahora solo usamos app para definir las rutas y para levantar el servidor
// y usamos router para definir las rutas