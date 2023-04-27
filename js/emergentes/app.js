"use strict";

//Ventana de alerta
const boton = document.querySelector(".boton");

boton.addEventListener('click', function () {
  alert("MENSAJE \nHola mundo");
})

const video = document.querySelector(".video");

video.addEventListener('ended', function () {
  console.log("El video ha terminado");
})


//Ventana de confirmación
video.addEventListener('ended', function () {
  let resultado = confirm("¿Desea repetir el video?");
  console.log(resultado);

  if (resultado) {
    video.play();
  } else {
    video.pause();
  }
})


//Ventana de ingreso de datos
video.addEventListener('ended', function () {
  let email = prompt("Escribe tus datos para ver más", "data@info.com");
  
  if (email == null || email == "") {
    console.log("El usuario no ingresó datos");
  } else {
    console.log("El usuario ingresó: ", email);
  }
})