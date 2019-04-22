const fs=require('fs');


let cosasporhacer=[];

crear=(datos)=>{

    cargarjson();
    let porHacer={
        descripcion:datos
        ,completado:false
    }

    cosasporhacer.push(porHacer)
    console.log(porHacer)
    return porHacer
}

guardacrear=()=>{

    let guardajson=JSON.stringify(cosasporhacer);

    fs.writeFile("./datos/data.json",guardajson,(err)=>{
        if (err) throw new Error ("No se pudo guardar el archivo")
    });
}


cargarjson=()=>{
    
    try{
    cosasporhacer=require('./data.json')
}catch(e){
    cosasporhacer=[]
}
return cosasporhacer
console.log(cosasporhacer)
}


actualizar=(descripcion,completado)=>{

    cargarjson()
   let resultado=cosasporhacer.findIndex(tarea=>tarea.descripcion===descripcion);

   if(resultado>=0){
    cosasporhacer[resultado].completado=completado
    guardacrear()
    return true
   }else{
       return false
   }


}

eliminar=(descripcion)=>{
    cargarjson()

    let resultado=cosasporhacer.filter(tarea=>tarea.descripcion!==descripcion)
    fs.writeFile("./datos/data.json",JSON.stringify(resultado),(err)=>{
        if (err) throw new Error ("No se pudo guardar el archivo")
    });
    

}
module.exports={
    crear,
    guardacrear,
    cargarjson,
    actualizar,
    eliminar
}