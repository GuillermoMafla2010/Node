const argv=require('yargs').command('crear','Se crea una activiidad',{
    descripcion:{
        alias:'d',
        demand:true,
        desc:"Descripcion de la tarea por hacer"
    }
}).command('actualizar','Se actualiza la actividad',{
    descripcion:{
        alias:'d',
        desc:"Descripcion de la tarea por hacer"
    },
    completado:{
        alias:'c',
        default:true,
        desc:"Marca como completada o pendiente la tarea"
    }
    

}).command('eliminar','Se eliminara la actividad',{
    descripcion:{
        alias:'d',
        demand:true
    }
}).help().argv



module.exports={
    argv,
 
}