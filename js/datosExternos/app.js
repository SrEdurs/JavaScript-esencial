"use strict";

//Obteniendo datos con fetch
var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var posts = null;

boton.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
        posts = data;
        mostrarDatos(posts);
        });
    });

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");
        titulo.innerHTML = i + " " + post.title;
        contenido.innerHTML = post.body;
        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    });
}