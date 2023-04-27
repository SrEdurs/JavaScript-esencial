"use strict";

//Eventos del mouse
const boton = document.querySelector(".boton");

boton.addEventListener('click', function () {
  console.log("El botón se ha pulsado");
})

boton.addEventListener('mouseover', function () {
  console.log("El mouse está sobre el botón");
})

boton.addEventListener('mouseout', function () {
  console.log("El mouse está fuera del botón");
})


//Eventos del teclado
//Keydown
//Keyup
//Keypress
window.addEventListener('keydown', function (event) {
  console.log("Pulsando tecla");
  console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener('keypress', function (event) {
  console.log("Tecla presionada");
})

window.addEventListener('keyup', function (event) {
  console.log("Tecla soltada");
})


//Carga de documento
window.addEventListener('load', function () {
  console.log("El contenido de la ventana se ha cargado");
})


//Eventos multimedia
/*const video = document.querySelector(".video");

video.addEventListener('play', function () {
  console.log("El video se ha iniciado");
})

video.addEventListener('seeking', function () {
  console.log("Se está buscando en el video", this.currentTime);
})

video.addEventListener('ended', function () {
  console.log("El video ha terminado");
})*/


//Temporizadores o timers
//setInterval
//setTimeout

//var temporizador = setInterval(function () {
//  setColor();
//}, 1000);

setTimeout(function () {
  setColor();
}, 3000);

function setColor(){
  var pagina = document.body;
  pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor(){
  clearInterval(temporizador);
}