const express = require('express');
//inyectamos el modulo express
const app = express();
// app que hace la funcion de servidor
const personsRoute = require('./routes/person');
// incluimos el router que viene de personas

app.set('view engine', 'ejs');
app.use(personsRoute);
//app.use(studentRoute);
//app.use('/assets', express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
//definimos el puerto de escucha

app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000');
});