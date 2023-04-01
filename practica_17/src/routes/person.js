const express = require('express');
let router = express.Router();

router.get('/student', (req, res) => {
    let t= req.params.id;
    res.render('student');
});

router.post('/addStudent', function (req, res) {
    res.render('displayData',{  nombre: req.body.nombre,
                                nss: req.body.nss,
                                edad: req.body.edad,
                                tipoSangre: req.body.tipoSangre
    });
});

// usamos el expresion "exprese.json" para parsear el body de la peticion y poder
// acceder a los datos del objeto pero tranformdo a string
router.post('/personJson', express.json({type:'*/*'}), (req, res) => {
    // el objeto lo recibe del archivo testJson.ejs ya que este es un archvo json
    // y se envia a traves de un formulario del body
    let t= req.params.id;
    res.render('testJson');
    // console.log(`nombre: ${req.body.nombre}
    //              apellido: ${req.body.apellido} `)
    res.render('personJson',
        {
            nombre: req.body.fname,
            apellido: req.body.lname
        });
});

router.get('/testJson', function(req, res){
    res.render('testJson');
});

module.exports=router;