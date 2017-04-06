<<<<<<< HEAD
"use-strict";
if (typeof localStorage === "undefined" || localStorage === null ) {
    let LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./dir_datos");
}
localStorage.setItem("clave1","valor1");
localStorage.setItem("clave2","valor2");
let item1 = localStorage.getItem("clave1");
let item2 = localStorage.getItem("clave2");

console.log("item1: "+item1+", item2: "+item2);
=======

console.log("Empezando");
if (typeof localStorage === "undefined" || localStorage === null) {
    var MiLocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new MiLocalStorage("./dir_datos");
}
// localStorage.setItem("Mi clave primera", "Un valor primero");
// localStorage.setItem("Mi clave segunda", "Un valor segundo");

var item1 = localStorage.getItem("Mi clave primera");
var item2 = localStorage.getItem("Mi clave segunda");
console.log("Items: " + item1 + ". item2: " + item2);
>>>>>>> b46bb90752f7fae5b1df3659a1362fbefc1489cd
