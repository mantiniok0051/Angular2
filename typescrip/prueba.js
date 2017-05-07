function holaMundo(nombre) {
    return "Hola Mundo!! soy " + nombre;
}
var nombre = "Mariano Soto";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tipos
var nombre_usuario = nombre;
var edad = 28;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS 3", "JavaSE", "HTML 5"];
// Declaración de una variable tuple 
var x;
// Initialización
x = ["hello", 10]; // OK
console.log(x[0]);
console.log(x[0].substr(1)); // OK
var y;
y = ["Mariano Soto", 99, true];
etiqueta.innerHTML = "Nombre: " + y[0] + " Nivel: " + y[1] + " Master:" + y[2];
//Scope de var y let
var a = 7; //scope global / general
var b = 12; //limitado a bloque de código
console.log("Antes del IF: " + a + " - " + b);
if (a === 7) {
    var a_1 = 4; //la variable se afecta sólo dentro de este bloque
    var b = 1; //la variable original se vé reemplazada
    console.log("Dentro del IF: " + a_1 + " - " + b);
}
console.log("Fuera del IF: " + a + " - " + b);
//Funciones y firma
function devuelveNumero(num) {
    return "" + num;
}
alert(devuelveNumero(99));
function f_printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var aObj = { size: 11, label: "Size 11 Object" };
f_printLabel(aObj);
