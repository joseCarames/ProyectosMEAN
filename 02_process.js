<<<<<<< HEAD
//ejecutamos una función 
process.on("exit", function(codigo) {
    console.log("saliendo del proceso, codigo: "+codigo);
});

console.log("Titulo: "+process.title);
console.log("S.O.: "+process.platform);
console.log("PID: "+process.pid);

process.exit();

console.log("PID: "+process.id);//esto no lo muestra porque ya hemos salido del proceso
=======
process.on("exit",
    function(codigo) {
        console.log("Saliendo de marcha " + codigo);
    }
);

console.log("Titulo: ", process.title);
console.log("S.O. ", process.platform);
process.exit(3);
console.log("PID ", process.pid);
>>>>>>> b46bb90752f7fae5b1df3659a1362fbefc1489cd
