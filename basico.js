const modalOverlay = document.getElementById("modalOverlay");
const modalHeader = document.querySelector(".modal-header h2");
const modalBody = document.querySelector(".modal-body");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeModal = document.getElementById("closeModal");

const acordeMayorParte1 = [
    { titulo: "Do Mayor", 
      imagen: "Acordes/ABasicos/Mayores/DoMayor.png", 
      descripcion: "El acorde Do es ideal para principiantes.", 
      sonido: "sonido/DO.mp3", 
      posicion:"Posicion de los dedos de Acorde Do Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/DoMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Re Mayor", 
      imagen: "imagenes/re.jpg", 
      descripcion: "El acorde Re es perfecto para transiciones.", 
      sonido: "sonidos/re.mp3",
      posicion:"Posicion de los dedos de Acorde Re Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/ReMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Mi Mayor",
      imagen: "imagenes/mi.jpg", 
      descripcion: "El acorde Mi es esencial para la guitarra.", 
      sonido: "sonidos/mi.mp3", 
      posicion:"Posicion de los dedos de Acorde Mi Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/MiMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "La Mayor",  
      imagen: "imagenes/la.jpg",
      descripcion: "El acorde La completa los acordes básicos.", 
      sonido: "sonidos/la.mp3",
      posicion:"Posicion de los dedos de Acorde La Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/LaMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    }
];

const acordeMayorParte2 = [
    { titulo: "Sol Mayor", 
      imagen: "imagenes/do.jpg", 
      descripcion: "El acorde Do es ideal para principiantes.", 
      sonido: "sonidos/do.mp3",
      posicion:"Posicion de los dedos de Acorde Sol Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/SolMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Si Mayor", 
      imagen: "imagenes/re.jpg", 
      descripcion: "El acorde Re es perfecto para transiciones.", 
      sonido: "sonidos/re.mp3" ,
      posicion:"Posicion de los dedos de Acorde Si Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/SiMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Fa Mayor", 
      imagen: "imagenes/mi.jpg", 
      descripcion: "El acorde Mi es esencial para la guitarra.", 
      sonido: "sonidos/mi.mp3" ,
      posicion:"Posicion de los dedos de Acorde Fa Mayor" ,
      imagen2: "Acordes/ABasicos/Mayores/FaMayor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    }
];

const acordeMenorParte1 = [
    { titulo: "Do Menor", 
      imagen: "imagenes/do-menor.jpg", 
      descripcion: "El acorde Do menor es emotivo y suave.", 
      sonido: "sonidos/do-menor.mp3",
      posicion:"Posicion de los dedos de Acorde Do Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/Do Menor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Re Menor", 
     imagen: "imagenes/re-menor.jpg", 
     descripcion: "El acorde Re menor tiene un sonido melancólico.", 
     sonido: "sonidos/re-menor.mp3",
     posicion:"Posicion de los dedos de Acorde Re Menor" ,
     imagen2: "Acordes/ABasicos/Mayores/Re Menor.png",
     consejo: "Practica lentamente para mejorar la precisión."
     },

    { titulo: "Mi Menor", 
      imagen: "imagenes/mi-menor.jpg", 
      descripcion: "El acorde Mi menor es básico y versátil.", 
      sonido: "sonidos/mi-menor.mp3",
      posicion:"Posicion de los dedos de Acorde Mi Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/Mi Menor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "La Menor", 
      imagen: "imagenes/la-menor.jpg", 
      descripcion: "El acorde La menor es excelente para iniciarse.", 
      sonido: "sonidos/la-menor.mp3",
      posicion:"Posicion de los dedos de Acorde La Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/La Menor.png",
      consejo: "Practica lentamente para mejorar la precisión."
     }
];

const acordeMenorParte2 = [
    { titulo: "Sol Menor", 
      imagen: "imagenes/sol-menor.jpg", 
      descripcion: "El acorde Sol menor es suave y profundo.", 
      sonido: "sonidos/sol-menor.mp3",
      posicion:"Posicion de los dedos de Acorde Sol Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/SolMenor.png",
      consejo: "Practica lentamente para mejorar la precisión."
     },

    { titulo: "Si Menor", 
      imagen: "imagenes/si-menor.jpg", 
      descripcion: "El acorde Si menor añade versatilidad.", 
      sonido: "sonidos/si-menor.mp3",
      posicion:"Posicion de los dedos de Acorde Si Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/SiMenor.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Fa Menor",
      imagen: "imagenes/fa-menor.jpg", 
      descripcion: "El acorde Fa menor tiene un tono oscuro.", 
      sonido: "sonidos/fa-menor.mp3",
      posicion:"Posicion de los dedos de Acorde Fa Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/Fa Menor.png",
      consejo: "Practica lentamente para mejorar la precisión."
     }
];

const acorde7Parte1 = [
    { titulo: "Do7", 
      imagen: "imagenes/do7.jpg", 
      descripcion: "El acorde Do7 aporta una tensión armónica única.", 
      sonido: "sonidos/do7.mp3",
      posicion:"Posicion de los dedos de Acorde Do7" ,
      imagen2: "Acordes/ABasicos/Mayores/Do7.png",
      consejo: "Practica lentamente para mejorar la precisión."
     },

    { titulo: "Re7", 
      imagen: "imagenes/re7.jpg",
      descripcion: "El acorde Re7 es ideal para progresiones jazzísticas.", 
      sonido: "sonidos/re7.mp3",
      posicion:"Posicion de los dedos de Acorde Re7 Menor" ,
      imagen2: "Acordes/ABasicos/Mayores/Re7.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Mi7", 
      imagen: "imagenes/mi7.jpg", 
      descripcion: "El acorde Mi7 tiene un sonido cálido y completo.", 
      sonido: "sonidos/mi7.mp3",
      posicion:"Posicion de los dedos de Acorde Mi7" ,
      imagen2: "Acordes/ABasicos/Mayores/Mi7.png",
      consejo: "Practica lentamente para mejorar la precisión."
     },

    { titulo: "La7", 
      imagen: "imagenes/la7.jpg", 
      descripcion: "El acorde La7 es común en el blues.", 
      sonido: "sonidos/la7.mp3",
      posicion:"Posicion de los dedos de Acorde La7" ,
      imagen2: "Acordes/ABasicos/Mayores/La7.png",
      consejo: "Practica lentamente para mejorar la precisión."
    }
];

const acorde7Parte2 = [
    { titulo: "Sol7", 
      imagen: "imagenes/sol7.jpg",
      descripcion: "El acorde Sol7 tiene un sonido relajante.", 
      sonido: "sonidos/sol7.mp3",
      posicion:"Posicion de los dedos de Acorde So7" ,
      imagen2: "Acordes/ABasicos/Mayores/So7.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },
    { titulo: "Si7", 
      imagen: "imagenes/si7.jpg", 
      descripcion: "El acorde Si7 es básico pero encantador.", 
      sonido: "sonidos/si7.mp3",
      posicion:"Posicion de los dedos de Acorde Si7" ,
      imagen2: "Acordes/ABasicos/Mayores/Si7.png",
      consejo: "Practica lentamente para mejorar la precisión."
    },

    { titulo: "Fa7",
      imagen: "imagenes/fa7.jpg", 
      descripcion: "El acorde Fa7 ofrece versatilidad melódica.", 
      sonido: "sonidos/fa7.mp3",
      posicion:"Posicion de los dedos de Acorde Fa7" ,
      imagen2: "Acordes/ABasicos/Mayores/Fa7.png",
      consejo: "Practica lentamente para mejorar la precisión."
    }
];

let slideIndex = 0; 

document.querySelectorAll(".btn-2").forEach((btn) => {
    btn.addEventListener("click", () => {
        const leccion = btn.getAttribute("data-modal");
        switch (leccion) {
            case "mayores1":
                abrirModal(acordeMayorParte1);
                break;
            case "mayores2":
                abrirModal(acordeMayorParte2);
                break;
            case "menores1":
                abrirModal(acordeMenorParte1);
                break;
            case "menores2":
                abrirModal(acordeMenorParte2);
                break;
            case "acordes71":
                abrirModal(acorde7Parte1);
                break;
            case "acordes72":
                abrirModal(acorde7Parte2);
                break;
        }
    });
});


function abrirModal(data) {
    slideIndex = 0; 
    actualizarModal(data);
    const overlay = document.getElementById("modalOverlay");
    overlay.style.display = "flex"; 
}


closeModal.addEventListener("click", () => {
    const overlay = document.getElementById("modalOverlay");
    overlay.style.display = "none"; 
});

function actualizarModal(data) {
  const acorde = data[slideIndex]; 
  modalHeader.textContent = acorde.titulo; 

  
  modalBody.innerHTML = `
      <div class="left">
          <img src="${acorde.imagen}" alt="${acorde.titulo}" class="modal-img"> <!-- Imagen principal -->
          <button id="btnEscuchar" class="btn-2">Escuchar</button>
      </div>
      <div class="right">
          <h2>${acorde.titulo}</h2> <!-- Título del acorde -->
          <p>${acorde.descripcion}</p> <!-- Descripción directamente después del título -->
          ${acorde.posicion ? `<h3>${acorde.posicion}</h3>` : ""} <!-- Posición del acorde -->
          ${acorde.imagen2 ? `<img src="${acorde.imagen2}" alt="Segunda imagen" class="imagen-secundaria">` : ""} <!-- Segunda imagen -->
          ${acorde.consejo ? `<p class="consejo">Consejo: ${acorde.consejo}</p>` : ""} <!-- Consejo al final -->
      </div>
  `;

  
  const btnEscuchar = document.getElementById("btnEscuchar");
  btnEscuchar.onclick = () => {
      if (acorde.sonido) {
          const audio = new Audio(acorde.sonido);
          audio.play();
      } else {
          console.warn("No se encontró archivo de sonido para este acorde.");
      }
  };
}


prevBtn.addEventListener("click", () => {
    if (slideIndex > 0) {
        slideIndex--;
        actualizarModal(getCurrentData());
    }
});

nextBtn.addEventListener("click", () => {
    if (slideIndex < getCurrentData().length - 1) {
        slideIndex++;
        actualizarModal(getCurrentData());
    }
});

function getCurrentData() {
    const leccion = document.querySelector(".btn-2[data-modal]");
    switch (leccion.getAttribute("data-modal")) {
        case "mayores1":
            return acordeMayorParte1;
        case "mayores2":
            return acordeMayorParte2;
        case "menores1":
            return acordeMenorParte1;
        case "menores2":
            return acordeMenorParte2;
        case "acordes71":
            return acorde7Parte1;
        case "acordes72":
            return acorde7Parte2;
        default:
            return [];
    }
}

window.addEventListener("load", () => {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
        overlay.style.display = "none";
    }
});