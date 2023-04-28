"use strict";

//Creando cadena de texto
var pais = 'España';
var continente = new String('Europa');


//Medir la longitud de una cadena
var texto = 'Hola mundo';
console.log("La cadena tiene " + texto.length + " caracteres");


//Métodos de búsqueda
var mensaje = 'Estoy aprendiendo JavaScript y estoy aprendiendo mucho';
var resultado;

//indexOf
resultado = mensaje.indexOf('aprendiendo');
console.log(resultado);

//lastIndexOf
resultado = mensaje.lastIndexOf('aprendiendo');
console.log(resultado);

//search
resultado = mensaje.search('aprendiendo');
console.log(resultado);

//search con expresión regular
resultado = mensaje.search(/ja/i);
console.log(resultado);

//match
resultado = mensaje.match(/aprendiendo/gi);
console.log(resultado);

//substr
resultado = mensaje.substr(6, 11);
console.log(resultado);

//substring
resultado = mensaje.substring(6, 17);
console.log(resultado);

//charAt
resultado = mensaje.charAt(0);
console.log(resultado);

//startsWith
resultado = mensaje.startsWith('Estoy');
console.log(resultado);

//startsWith combinado
var textoEn = mensaje.indexOf('JavaScript');
resultado = mensaje.startsWith('Ja', textoEn);
console.log(resultado);

//endsWith
resultado = mensaje.endsWith('mucho');
console.log(resultado);

//includes
resultado = mensaje.includes('JavaScript');
console.log(resultado);

//includes delimitado
resultado = mensaje.includes('JavaScript', 25);
console.log(resultado);

//repeat
resultado = mensaje.repeat(2);
console.log(resultado);

//replace
resultado = mensaje.replace('JavaScript', 'a programar');
console.log(resultado);

//slice
resultado = mensaje.slice(6);
console.log(resultado);

//slice con length
resultado = mensaje.slice(6, mensaje.length-6);
console.log(resultado);


//split
resultado = mensaje.split(' ');
console.log(resultado);

//trim elimina los espacios antes y después de la cadena
resultado = mensaje.trim();
console.log(resultado);

//trimStart elimina los espacios antes de la cadena
resultado = mensaje.trimStart();
console.log(resultado);

//trimEnd elimina los espacios después de la cadena
resultado = mensaje.trimEnd();
console.log(resultado);

//concat
var texto1 = 'Estoy aprendiendo';
var texto2 = 'JavaScript';
resultado = texto1.concat(' ', texto2);
console.log(resultado);

//toLowerCase
resultado = mensaje.toLowerCase();
console.log(resultado);

//toUpperCase
resultado = mensaje.toUpperCase();
console.log(resultado);

//Template strings
var lenguaje = 'JavaScript';
var mensaje = `Estoy aprendiendo ${lenguaje} y estoy aprendiendo mucho`;
console.log(mensaje);

//Template strings en varias líneas
var mensajeMultilinea = `
    Hola mundo,
    estoy aprendiendo
    ${lenguaje} y estoy aprendiendo mucho
`;
console.log(mensajeMultilinea);

//Template strings con funciones
function calcularEdad() {
    return 10 + 20;
}

var mensaje = `La suma de 10 + 20 es ${calcularEdad()}`;
console.log(mensaje);
