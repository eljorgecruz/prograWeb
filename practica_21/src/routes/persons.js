const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');


// creamos nuestra ruta principal donde este el listado de las personas
router.get('/gente', async (req, res) => {
     const Persons = await Person.find({});
    res.render('persons', { Persons });
});

// creamos nuestra ruta para agregar personas
// renderizamos la vista addPerson que hicimos en el archivo addPerson.ejs
router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

// creamos nuestra ruta para agregar personas que se activa cuando se envia el formulario
// en esta ruta recibimos los datos del formulario y los guardamos en la base de datos
router.post('/addPerson', async (req, res) => {
    // creamos una nueva persona con los datos que recibimos del formulario
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    
    newPerson
    .save()// usamos el metodo de promesa save para guardar la persona en la base de datos
    .then((data) => res.redirect('/gente'))// si se guarda correctamente redireccionamos a la ruta principal
    .catch((err) => res.json(err)); // si hay un error lo mostramos en pantalla-
})


// creamos la ruta que invoca el metodo findById para buscar una persona por su id
router.get('/findById/:id', async (req, res) => {
    Person.findById(req.params.id) // sacamos el id de los parametros de la url
    .then((myPerson) => {res.render('personUpdate', {myPerson})}) // si se encuentra la persona renderizamos la vista personUpdate
    .catch((error) => {res.json({message:error})}); // si hay un error lo mostramos en pantalla
});


// creamos la ruta que invoca el metodo findByIdAndUpdate para modificar una persona por su id
router.post('/updatePerson', async (req, res) => {
    Person.findByIdAndUpdate(req.body.objId,// sacamos el id de los parametros de la url
        {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss

    })
    .then((data)=>{res.redirect('/gente')}) // si todo sale bien redireccionamos a la ruta principal
    .catch((error)=>{res.json({message:error})}); // si algo sale mal mostramos el error en pantalla
})

module.exports = router;