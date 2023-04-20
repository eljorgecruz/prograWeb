//creamos las variables de entorno que vamos a usar
const express = require('express');
const mongoose = require('mongoose');

//configuracion de dotenv que es una varible de entorno que configuramos en el archivo .env
require("dotenv").config();

//inicializamos express y el puerto que vamos a usar
const app = express();
const port = process.env.PORT || 9000;

//routes y mensaje de inicio
app.get("/", (req, res) => {
    res.send("Hello World");
});

// mpngoose conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Mongo DB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));
