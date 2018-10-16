/*

*/

//const fs = require('express');
//const fs = require('./archivo');
const argv = require('yargs');
const argv = require('colors');

.command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

console.log(argv);

//console.log(argv.base);


//crearArchivo(base).then(archivo => console.log(`Archivo creado : ${archivo}`)).catch(e => console.log(e));