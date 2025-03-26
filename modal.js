
const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = document.querySelectorAll(".slide");


let currentSlide = 0;


function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });

    
    prevBtn.style.display = currentSlide === 0 ? "none" : "block";
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block";
}


openModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    currentSlide = 0; 
});


closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});


nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});


prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

