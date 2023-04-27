"use strict";

//Condicion IF
var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB) {
  resultado = "La condición se ha cumplido";
} else if (datoA == datoB) {
  resultado = "Segunda evaluación verdadera";
} else {
  resultado = "La condición no se ha cumplido";
}

console.log("El resultado de la evaluación if es: " + resultado);


//Condicion SWITCH
var edad = 25;
var resultado = "";

switch (edad) {
  case 18:
    resultado = "Acabas de cumplir la mayoría de edad";
    break;
  case 25:
    resultado = "Ya eres un adulto";
    break;
  case 40:
    resultado = "Crisis de los 40";
    break;
  case 75:
    resultado = "Eres un anciano";
    break;
  default:
    resultado = "Tu edad es neutra";
}

console.log("El resultado de la evaluación switch es: " + resultado);

//Switch con texto
var producto = "TV";

switch (producto) {
  case "TV":
    console.log("Es una TV");
    break;
  case "Nevera":
    console.log("Es una nevera");
    break;
  case "Lavadora":
    console.log("Es una lavadora");
    break;
  default:
    console.log("No tenemos ese producto");
}

