const argv = require('yargs')
    .option('b',{
        alias:'base',
        type :'number',
        demandOption: true,
        
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        } 
        return true;
    })
    .option('l',{
        alias : 'listado',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type :'number',
        demandOption: false,
        default: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })
    .argv;

module.exports = argv;