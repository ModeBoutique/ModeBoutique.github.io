// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Función para agregar un elemento a la bolsa
    function agregarALaBolsa(nombre, precio) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre + " - $" + precio;

        document.getElementById("items-list").appendChild(nuevoElemento);
    }

    // Función para vaciar la bolsa
    document.getElementById("vaciar-bolsa").addEventListener("click", function() {
        document.getElementById("items-list").innerHTML = "";
    });
});