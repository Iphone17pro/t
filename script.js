window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("lang-modal");
    const flags = document.querySelectorAll(".lang-options img");

    // Comprobar si ya hay un idioma seleccionado
    const idiomaSeleccionado = localStorage.getItem("idioma");
    if (idiomaSeleccionado) {
        modal.style.display = "none"; // Oculta el modal si ya eligieron idioma
    } else {
        modal.style.display = "flex"; // Mostrar el modal si no hay idioma
    }

    flags.forEach(flag => {
        flag.addEventListener("click", () => {
            const lang = flag.getAttribute("data-lang");
            localStorage.setItem("idioma", lang); // Guardar la selección

            // Redirigir a la página correspondiente
            switch(lang) {
                case "es":
                    window.location.href = "../index.html";
                    break;
                case "en":
                    window.location.href = "../en/index.html";
                    break;
                case "fr":
                    window.location.href = "../fr/index.html";
                    break;
                case "de":
                    window.location.href = "../de/index.html";
                    break;
                default:
                    window.location.href = "../index.html";
            }
        });
    });
});
