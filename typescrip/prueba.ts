function holaMundo(nombre){
	return "Hola Mundo!! soy "+nombre
}

let nombre = "Mariano Soto";
let resultado = holaMundo(nombre);

let etiqueta = <HTMLElement> document.getElementById("container");
	etiqueta.innerHTML = resultado;

//Variables y tipos
let nombre_usuario:string = nombre;
let edad:number = 28;
let programador:boolean = true;
let langs:Array<string> = ["PHP", "JavaScript", "CSS 3", "JavaSE", "HTML 5"];


// Declaración de una variable tuple 
let x: [string, number];
// Initialización
x = ["hello", 10]; // OK
console.log(x[0]);

console.log(x[0].substr(1)); // OK


let y: [string, number, boolean];
y=["Mariano Soto",99,true] ;


etiqueta.innerHTML= "Nombre: "+y[0]+" Nivel: "+y[1]+" Master:"+y[2];


//Scope de var y let
var a= 7; //scope global / general
var b= 12; //limitado a bloque de código

console.log("Antes del IF: "+a+" - "+b);

if(a === 7) {
	let a = 4; //la variable se afecta sólo dentro de este bloque
	var b = 1; //la variable original se vé reemplazada

	console.log("Dentro del IF: "+a+" - "+b);
}

console.log("Fuera del IF: "+a+" - "+b);

//Funciones y firma

function devuelveNumero(num:number):string{
	return ""+num;
}

alert(devuelveNumero(99));


function f_printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let aObj = {size: 11, label: "Size 11 Object"};
f_printLabel(aObj);