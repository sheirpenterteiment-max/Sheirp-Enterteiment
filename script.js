// SHEIRP ENTERTAINMENT

console.log("Welcome to Sheirp Entertainment!");

// Animación al cargar la página
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efecto para el botón APPLY NOW
const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
}

// Mensaje al hacer clic en el botón
button?.addEventListener("click", () => {
    alert("Welcome! Please complete the audition form.");
});