"use strict";

//Ciclo for
var productos = 5;

for (let contador = 0; contador < productos; contador++) {
  console.log("Producto " + contador);
}


//Ciclo while
var productos2 = 5;

while (productos2 > 0) {
  console.log("Producto vendido con while");
  productos2--;
}


//Ciclo do while
var productos3 = 5;

do {
  console.log("Producto vendido con do while");
  productos3--;
} while (productos3 >= 1);


//Control de ciclos
//Break y continue
var contador = 0;
var cuenta = 0;

for (contador = 0; contador < 20; contador++) {
  if (contador == 5){
    break;
  }
  if (contador % 2 == 0) {
    continue;
  }
  cuenta++;
}

console.log("Hay " + cuenta + " números impares");

var mult = 0;
var numero = 5;

for (let i = 0; i < 11; i++) {
    mult = numero * i;
    console.log(numero + " * " + i + " = " + mult);
}