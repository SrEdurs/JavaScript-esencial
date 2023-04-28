"use strict";

//Propiedades numéricas
console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MIN_VALUE: " + Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);
console.log("NaN: " + Number.NaN);

//Métodos numéricos
var numero = "10.5";
console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ', parseInt(numero));
console.log('parseFloat: ', parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));

//Propiedades numéricas de instancias
var numero = 2.5;
console.log("toExponential: ", numero.toExponential(4));
console.log("toFixed: ", numero.toFixed(2));
console.log("toPrecision: ", numero.toPrecision(3));
console.log("toString: ", numero);