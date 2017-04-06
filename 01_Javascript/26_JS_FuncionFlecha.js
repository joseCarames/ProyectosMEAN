function enviarPeticionAjax(exito, error, fin){
    
    let respuesta = "[{nombre:'Pepe'},{nombre:'Manolo'},{nombre:'Perico'},{nombre:'Curro'}]";
    let status = 200;
    let txtError = "Se ha producido un zasca importante!";

    exito(respuesta,status);
    error(txtError);
    if(fin !== undefined){
        fin();
    }
}

console.log("==========================================================")
enviarPeticionAjax(
    function(respuesta,status){console.log("Éxito!:"+respuesta);console.log("status:"+status);},
    function(error){console.log("Error:"+error);},
    function(){console.log("Fin!");}
);

console.log("==========================================================")
enviarPeticionAjax(
    (respuesta,status) => {console.log("Éxito!:"+respuesta);console.log("status:"+status);},
    error => console.log("Error:"+error),
    () => console.log("Fin!")
);

    // x => x*x;
    // (x) => {return x*x};
    // () => 5;


/////////////////////////////////////////////////////////////////////////
console.log("==========================================================")
function pruebas(funcion){
    console.log(funcion(5));
}

pruebas( function(num) { return num*num; } );
pruebas( num => num*num );
