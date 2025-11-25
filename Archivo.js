document.documentElement.classList.add("dark");

// Evento del botón de cambio de tema
document.getElementById("btnTema").addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
});