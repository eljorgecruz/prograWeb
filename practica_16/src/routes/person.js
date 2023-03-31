const express = require('express');
const router = express.Router();
// intanciacion del "router" al que asociaremos todas las rutas

// Definimos las rutas
// ahora las rutas se definen con router y no con app como parte del refactor
// usando router podemos definir rutas para un mismo archivo
router.get('/', (req, res) => {
    res.send('Este es el archivo person con respuesta de tipo send');
});

router.get('/person', (req, res) => {
    res.render('person')
});


module.exports = router;