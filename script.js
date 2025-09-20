// Modal de idioma
window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("lang-modal");
    const flags = document.querySelectorAll(".lang-options img");

    flags.forEach(flag => {
        flag.addEventListener("click", () => {
            let idioma = flag.getAttribute("data-lang");

            // Redirige según el idioma seleccionado
            switch(idioma) {
                case "es":
                    window.location.href = "/index.html";
                    break;
                case "en":
                    window.location.href = "/en/index.html";
                    break;
                case "fr":
                    window.location.href = "/fr/index.html";
                    break;
                case "de":
                    window.location.href = "/de/index.html";
                    break;
            }
        });
    });
});
