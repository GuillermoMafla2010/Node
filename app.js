const argv=require('./config/yargs').argv;
const data=require('./datos/datos');


let comando = argv._[0];
console.log(argv)
switch(comando){
    case 'listar':
    console.log("Se listan las tareas")
    data.cargarjson()
    break;

    case 'crear':
    console.log("Se creara una nueva tarea")
    data.crear(argv.d)
    data.guardacrear(argv.descripcion)
    break;

    case 'actualizar':
    data.actualizar(argv.descripcion,argv.completado)
    console.log("Se procedera a actualizar una tarea")
    break;

    case 'eliminar':
    data.eliminar(argv.descripcion)
    console.log("Se borro el registro")

    default:
    console.log("Mamame el bicho")
    break;
}