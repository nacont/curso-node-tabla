const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${colors.yellow(base*i)}\n`;
        }
    
        if(listar) {
            console.log('==============='.green);
            console.log(`| TABLA DEL ${colors.blue(base)} |`);
            console.log('==============='.green);
            console.log(consola);    
        }
    
        fs.writeFileSync(`./salida/Tabla_del_${base}.txt`, salida);
    
        return `Tabla_del_${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}