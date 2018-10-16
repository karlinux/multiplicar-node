const fs = require('fs');


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += ` ${i} * ${base} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });


    });
}

module.exports = {
    crearArchivo
}