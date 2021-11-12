const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listado = false, hasta = 10) =>{
    try {
        
        let salida, consola = ''; 
        
        for(let i=1;i<=hasta;i++)
        {
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${colors.red('x')} ${i} ${'='.red} ${colors.green(base*i)} \n`;
        }
        if(listado){
            console.log('================='.yellow);
            console.log('   Tabla del '.yellow,colors.blue(base));
            console.log('================='.yellow);
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `Tabla-${base} creada`;
    } catch (error) {
        throw error;
        
    }    

}

module.exports = {
    crearArchivo   
}