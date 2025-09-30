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

            // Redirigir a la página correspondiente (rutas relativas)
            switch(lang) {
                case "es":
                    window.location.href = "index.html";
                    break;
                case "en":
                    window.location.href = "en/index.html";
                    break;
                case "fr":
                    window.location.href = "fr/index.html";
                    break;
                case "de":
                    window.location.href = "de/index.html";
                    break;
                default:
                    window.location.href = "index.html";
            }
        });
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // cambia cada 4 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el modal y el div "Servicios para empresas"
    const empresaModal = document.getElementById('empresa-modal');
    const btnEmpresa = document.querySelector('#servicios .service:last-child');
    const closeEmpresa = document.querySelector('.close-empresa');

    if (btnEmpresa && empresaModal && closeEmpresa) {
        // Abrir modal al hacer click
        btnEmpresa.addEventListener('click', () => {
            empresaModal.style.display = 'flex';
        });

        // Cerrar modal con la X
        closeEmpresa.addEventListener('click', () => {
            empresaModal.style.display = 'none';
        });

        // Cerrar modal al hacer click fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === empresaModal) {
                empresaModal.style.display = 'none';
            }
        });
    }
});
