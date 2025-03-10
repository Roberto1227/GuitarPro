// Selección de elementos
const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = document.querySelectorAll(".slide");

// Estado inicial
let currentSlide = 0;

// Función para actualizar las diapositivas
function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });

    // Mostrar u ocultar botones
    prevBtn.style.display = currentSlide === 0 ? "none" : "block";
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block";
}

// Abrir la modal
openModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    currentSlide = 0; // Reiniciar a la primera diapositiva
    updateSlide();
});

// Cerrar la modal
closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

// Botón "Siguiente"
nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

// Botón "Anterior"
prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

