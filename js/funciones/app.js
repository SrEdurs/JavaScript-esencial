"use strict";

//Estructura básica de una función
function saludar(nombre, edad){
  console.log("Hola ", nombre);
  console.log("Tienes ", edad, " años");
  var resultado = nombre + " tiene " + edad + " años";
  return resultado;
}

var mensaje = saludar("Edupardo", 25);

console.log(mensaje);


//Inicialización de parámetros
function contar(cantidad = 20){
  console.log("Total: ", cantidad);
}

contar(100);


//Parametros REST
function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
  console.log("Ingrediente 1: ", ingrediente1);
  console.log("Ingrediente 2: ", ingrediente2);
  console.log("Más ingredientes: ", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Lechuga");


//Parametros SPREAD
function cocinar2(ingrediente1, ingrediente2, ingrediente3, ...otros){
  console.log("Ingrediente 1: ", ingrediente1);
  console.log("Ingrediente 2: ", ingrediente2);
  console.log("Ingrediente 3: ", ingrediente3);
  console.log('Otros:', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar2(...ingredientesBase, "Arroz", "Frijoles", "Pescado", "Lechuga");


//Funciones anónimas
/*(
  function(){
    var mensaje = "Hola";
    console.log(mensaje);
  }
)()*/

var saludar = function(nombre){
  var mensaje = "Hola " + nombre;
  return mensaje;
}


//Callbacks
function calcular(datoA, datoB, sumarCB, restarCB){
  var suma = datoA + datoB;
  var resta = datoA - datoB;

  sumarCB(suma);
  restarCB(resta);
}

calcular(2, 3, function(resultado){
  console.log("Suma: ", resultado);
}, function(resultado){
  console.log("Resta: ", resultado);
});


//Lambda o funciones flecha (arrow functions) =>
var saludar = nombre => "Hola " + nombre;
console.log(saludar("Edupardo"));

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
  var datoC = 5;
  return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
  return "Validación correcta";
}
console.log(validar());


//Operador this
const boton = document.querySelector('.boton');

boton.addEventListener('click', () => {
  console.log(this);
  this.location = 'https://www.google.com';
});