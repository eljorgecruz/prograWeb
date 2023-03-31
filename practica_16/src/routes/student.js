let express = require('express');
let router = express.Router();
let app = express();
//App que hace la función de servidor
let personsRoute = require('./person');
let studentRoute = require('./student');

router.get('/student', (req, res) => res.render('student'));
//addStudent que abra el archivo displayData.ejs por metodo post
router.post('/addStudent', (req, res) => {
    let t = req.params.id;
    res.render('displayData',
        {
            nombre: req.body.nombre,
            nss: req.body.nss,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre
        });
});

module.exports = router;