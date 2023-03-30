const express = require('express');
const router = express.Router();
// intanciacion del "router" al que asociaremos todas las rutas

//router.set('views', path.join(__dirname, 'views'));

// router.get('/', (req, res) => {
//     res.send('Este es el archivo person');
// });

router.get('/person', (req, res) => {
    res.render('person')
});

// router.get('/student', function(req, res) {
//     let t=req.params.id;
//     res.render('student');// Renderizamos la vista student que es un formulario que nos permite ingresar datos
//     // porque utlizamos las propiedades de express para parsear el body podemos acceder a los datos del formulario
// });

module.exports = router;