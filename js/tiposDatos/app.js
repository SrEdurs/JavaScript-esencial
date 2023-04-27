"use strict";


//Números
var edad = 18;
var cantidad = "100";
//Pasar de string a int
var nuevaCantidad = Number(cantidad);
//Pasar de int a string
var nuevaCantidad2 = String(edad);
//Pasar de string a float
var nuevaCantidad3 = parseFloat(cantidad);


//Cadenas de texto
var nombre = "Juan";
//Podemos usar también las comillas simples
var apellido = 'Perez';
//Concatenar
var nombreCompleto = nombre + " " + "Perez";
//Interpolación de texto
var nombreCompleto2 = `${nombre} Perez`;


//Booleanos
var mayorDeEdad = true;
var menorDeEdad = false;
//Asignamos el valor con una condición
var estado = Boolean(10 < 9);


//Fechas
var fecha = new Date();


//Símbolos
var simbolo1 = Symbol();
var simbolo2 = Symbol();
var ambiente = Symbol("dev");


//JSON => JavaScript Object Notation
var persona = { nombre : "Juan", twitter : "@juanperez" };
var personas = [
  { nombre : "Juan", twitter : "@juanperez" },
  { nombre : "Pedro", twitter : "@pedroperez" },
  { nombre : "Pablo", twitter : "@pabloperez" },
  persona
];
//convertir a JSON
var personaJSON = JSON.stringify(persona);
//convertir a objeto
var personaObjeto = JSON.parse(personaJSON);
