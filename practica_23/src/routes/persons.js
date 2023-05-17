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
});

// creamos la ruta que invoca el metodo findByIdAndDelete para eliminar una persona por su id
// despues que el boton salte la alerta de confirmacion de eliminacion
router.get('/deletePerson/:id', async (req, res) => {
    try {
      const deletedPerson = await Person.findByIdAndDelete(req.params.id);
      res.redirect('/gente');
    } catch (error) {
      res.json({ message: error });
    }
    // usamos el try catch para manejar los errores de la promesa de findByIdAndDelete
    // si todo sale bien redireccionamos a la ruta principal
    // si algo sale mal mostramos el error en pantalla
});

// creamos la ruta que invoca el metodo find para buscar una persona por su nombre
// usamos el metodo regex para buscar coincidencias en la base de datos
// usamos el metodo options para que no sea case sensitive
// despues de buscar renderizamos la vista persons con los datos de la busqueda
router.post('/find', (req, res) => {
    Person.find({ nombre: {$regex: req.body.criteria, $options: 'i'} })
    .then((Persons)=>{res.render('persons', {Persons})})
    .catch((error)=>{res.json({message:error})});
});

module.exports = router;