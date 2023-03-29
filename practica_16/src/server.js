let express = require('express');
//inyectamos el modulo express
let app = express();
// app que hace la funcion de servidor
let personsRoute = require('./routes/person');
// incluimos el router que viene de personas

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static('__dirname + /public'));

let PORT = process.env.PORT || 3000;
//definimos el puerto de escucha

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});