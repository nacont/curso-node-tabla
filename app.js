const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(error => console.log(error));