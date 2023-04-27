"use strict";

//Operadores aritméticos
var datoA = 10;
var datoB = 20;
//Suma
var suma = datoA + datoB;
console.log('la suma de ' + datoA + ' + ' + datoB + ' es: ' + suma);
//Resta
var resta = datoA - datoB;
console.log('la resta de ' + datoA + ' - ' + datoB + ' es: ' + resta);
//Multiplicación
var multiplicacion = datoA * datoB;
console.log('la multiplicación de ' + datoA + ' * ' + datoB + ' es: ' + multiplicacion);
//División
var division = datoA / datoB;
console.log('la división de ' + datoA + ' / ' + datoB + ' es: ' + division);
//Módulo
var modulo = datoA % datoB;
console.log('el módulo de ' + datoA + ' % ' + datoB + ' es: ' + modulo);
//Incremento
var incremento = datoA++;
console.log('el incremento de ' + datoA + '++ es: ' + incremento);
//Decremento
var decremento = datoA--;
console.log('el decremento de ' + datoA + '-- es: ' + decremento);


//Operadores de asignación
var datoC = 10;
var datoD = 20;
//Sumar y asignar
var masIgual = 10;
masIgual += datoC;
console.log('El resultado de la asignación += es: ' + masIgual);
//Restar y asignar
var menosIgual = 10;
menosIgual -= datoC;
console.log('El resultado de la asignación -= es: ' + menosIgual);
//Multiplicar y asignar
var porIgual = 10;
porIgual *= datoC;
console.log('El resultado de la asignación *= es: ' + porIgual);
//Dividir y asignar
var entreIgual = 20;
entreIgual /= datoC;
console.log('El resultado de la asignación /= es: ' + entreIgual);
//Módulo y asignar
var moduloIgual = 10;
moduloIgual %= datoC;
console.log('El resultado de la asignación %= es: ' + moduloIgual);


//Operadores de comparación
var datoE = 10;
var datoF = 20;
//Igualdad
var igualdad = datoE == datoF;
//Desigualdad
var desigualdad = datoE != datoF;
//Igualdad estricta
var igualdadEstricta = datoE === datoF;
//Desigualdad estricta
var desigualdadEstricta = datoE !== datoF;
//Mayor que
var mayorQue = datoE > datoF;
//Menor que
var menorQue = datoE < datoF;
//Mayor o igual que
var mayorOIgualQue = datoE >= datoF;
//Menor o igual que
var menorOIgualQue = datoE <= datoF;


//Operadores lógicos
var datoG = 10;
var datoH = 20;
//AND
var and =(datoG > 10 && datoH > 20);
console.log('El resultado de la comparación AND es: ' + and);
//OR
var or =(datoG > 10 || datoH > 10);
console.log('El resultado de la comparación OR es: ' + or);
//NOT
var not =!(datoG > 10);
console.log('El resultado de la comparación NOT es: ' + not);


//Operador negativo
var datoI = 10;
var negativo = -datoI;
console.log('El valor de ' + datoI + ' después de aplicar el operador negativo es: ' + negativo);


//Operadores de concatenación
var datoJ = "Hola";
var datoK = "Mundo";
var datoL = 10;
var datoM = 20;
//Concatenación de números
var concatenacionNumeros = datoL + " " + datoM;
console.log('El resultado de la concatenación de números es: ' + concatenacionNumeros);
//Concatenación de texto
var concatenacionTexto = datoJ + " " + datoK;
console.log('El resultado de la concatenación de texto es: ' + concatenacionTexto);
//Concatenación de texto y números
var concatenacionTextoNumeros = datoJ + " " + datoL;
console.log('El resultado de la concatenación de texto y números es: ' + concatenacionTextoNumeros);


//Operador ternario
var datoN = 10;
var datoO = 20;
//COndición ? TRUE : FALSE
var ternario = datoN > datoO ? "El datoN es mayor que el datoO" : "El datoN es menor que el datoO";
console.log('El resultado del operador ternario es: ' + ternario);


//Operador typeof
var datoP = 10; //Número
var datoQ = "Hola"; //Texto
var datoR = true; //Booleano
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20
}; //Objeto
console.log('El tipo de dato de datoP es: ' + typeof datoP);
console.log('El tipo de dato de datoQ es: ' + typeof datoQ);
console.log('El tipo de dato de datoR es: ' + typeof datoR);
console.log('El tipo de dato de persona es: ' + typeof persona);