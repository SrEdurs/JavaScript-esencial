"use strict";

//Creando un arreglo
var paises = ["España", "Francia", "Portugal", "Australia"];
console.log(paises);

//Otra forma de crear un arreglo
var paises2 = new Array("España", "Francia", "Portugal", "Australia");

//Recorrer un arreglo
for (var i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

//Medir la longitud de un arreglo
console.log('Hay ' + paises.length + ' elementos en el arreglo');

//Leer un elemento del arreglo
console.log(paises[0]);

//Leer el último elemento del arreglo
console.log(paises[paises.length - 1]);

//Leer un elemento que empiece por n letra
var letra = 'P';
for (var i = 0; i < paises.length; i++) {
    if (paises[i].charAt(0) == letra) {
        console.log(paises[i]);
    }
}

//Leer un elemento que termine por n letra
var letra = 'a';
for (var i = 0; i < paises.length; i++) {
    if (paises[i].charAt(paises[i].length - 1) == letra) {
        console.log(paises[i]);
    }
}

//Leer un elemento que sea igual a otra cadena de texto
var pais = 'España';
for (var i = 0; i < paises.length; i++) {
    if (paises[i] == pais) {
        console.log(paises[i]);
    }
}

//Añadir un elemento al arreglo
paises[4] = "Inglaterra";
console.log(paises);

//Añadir un elemento al final del arreglo
paises.push("Alemania");
console.log(paises);

//Añadir un elemento al inicio del arreglo
paises.unshift("Argentina");
console.log(paises);

//Eliminar un elemento al final del arreglo
paises.pop();
console.log(paises);

//Eliminar un elemento al inicio del arreglo
paises.shift();
console.log(paises);

//Eliminar un elemento del arreglo
paises.splice(2, 1);
console.log(paises);

//Invertir el orden de los elementos del arreglo
paises.reverse();
console.log(paises);

//Ordenar los elementos del arreglo
paises.sort();
console.log(paises);

//Ordenar los elementos del arreglo de forma personalizada
paises.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(paises);

//Unir elementos de un arreglo en una cadena de texto
var texto = paises.join();
console.log(texto);

//Convertir una cadena a un arreglo
var cadena = 'texto1,texto2,texto3';
var arreglo = cadena.split(',');
console.log(arreglo);

//Array.from
var cadenaHTML = Array.from(document.querySelectorAll('.textos p'));
var cadena2 = cadenaHTML.map( cadena => cadena.textContent)
console.log(cadena2);

//Array.of
var arreglo3 = Array.of('texto1', 'texto2', 'texto3');
console.log(arreglo3);

//Array.find
var arreglo4 = [10, 20, 30, 40, 50];
var resultado = arreglo4.find( numero => numero > 30);
console.log(resultado);

//Desestructuración de arreglos

//Sin desestructuración
var arreglo5 = ['texto1', 'texto2', 'texto3'];
var uno = arreglo5[0];
var dos = arreglo5[1];
var tres = arreglo5[2];
console.log(uno, dos, tres);

//Con desestructuración
var [uno, dos, tres] = ['texto4', 'texto5', 'texto6'];
console.log(uno, dos, tres);

//Iterando arreglos con for ...in
var arreglo6 = ['texto7', 'texto8', 'texto9'];
for (let i in arreglo6) {
    console.log(arreglo6[i]);
}

//Iterando arreglos con for each
var arreglo7 = ['texto1', 'texto2', 'texto3'];
arreglo7.forEach(arreglo7 => console.log(arreglo7));

//Iterando arreglos con for each con indice
var arreglo8 = ['texto1', 'texto2', 'texto3'];
arreglo8.forEach((arreglo8, indice) => console.log(indice, arreglo8));

//Buscando en un arreglo
var arreglo9 = ['texto1', 'texto2', 'texto3'];
var palabra = arreglo9.find(arreglo9 => arreglo9 == 'texto2');
console.log(palabra);

//Buscando en un objeto
var persona = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Pedro', edad: 30},
    {nombre: 'Luis', edad: 40}
];

var persona2 = persona.find(persona => persona.nombre == 'Pedro');
console.log(persona2);

//Buscando en un arreglo con findIndex
var personas = [{
    nombre: 'Juan',
    edad: 20
}, {
    nombre: 'Pedro',
    edad: 30
}, {
    nombre: 'Luis',
    edad: 40
}];
var indice = personas.findIndex(personas => personas.nombre == 'Pedro');
console.log(indice);

//Usando filter
var indice = personas.filter(personas => personas.nombre == 'Pedro');
console.log(indice);

//Validación de elementos de un arreglo
var resultado = null;

var menu = [
    {nombre: 'Café', precio: 20, pais: 'Colombia'},
    {nombre: 'Té', precio: 10, pais: 'China'},
    {nombre: 'Chocolate', precio: 30, pais: 'Suiza'}
];

//Validación de elementos de un arreglo con some
var resultado = menu.some(menu => menu.precio <= 10);
console.log(resultado);

//Validación de elementos de un arreglo con every
var resultado = menu.every(menu => menu.precio <= 10);
console.log(resultado);

