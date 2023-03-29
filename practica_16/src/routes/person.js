let express = require('express');
let router = express.Router();
// intanciacion del "router" al que asociaremos todas las rutas

router.get('/', (req, res) => {
    res.send('Has solicitado el listado de personas');
});

module.exports = router;