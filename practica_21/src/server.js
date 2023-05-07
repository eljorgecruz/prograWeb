const express = require('express'); //inyectamos express
const mongoose = require('mongoose'); //inyectamos mongoose
const personsRoutes = require('./routes/persons'); //inyectamos las rutas de personas
require('dotenv').config(); //inyectamos dotenv para las variables de entorno


mongoose.Promise = global.Promise; //configuramos mongoose para que use las promesas de javascript
const app = express(); //creamos una instancia de express
const port = process.env.PORT || 3000; //definimos el puerto

app.set('view engine', 'ejs'); //configuramos el motor de plantillas
app.use(express.urlencoded({ extended: false })); //configuramos express para que use el body parser
app.use(personsRoutes);//configuramos express para que use las rutas de personas

app.use('/assets', express.static(__dirname + '/public')); //configuramos express para que use los archivos estaticos de la carpeta public
console.log(__dirname + '/public');

// mongoose conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Mongo DB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));
