let currentChord = 'C';
let audio = null;


// Función para reproducir el sonido
function playSound(audioFile) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio('sonido/' + audioFile);
    audio.play().catch(error => console.error("Error al reproducir el audio:", error));
}

// Función para reproducir el sonido y mostrar la imagen del acorde
function playCurrentSound() {
    const chordSteps = {
        'C': { file: 'DO.mp3', image: 'Acordes/ABasicos/Mayores/DoMayor.png' },
        'D': { file: 'Re.mp3', image: 'Acordes/ReMayor.png' },
        'E': { file: 'Mi.mp3', image: 'Acordes/MiMayor.png' },
        'A': { file: 'La.mp3', image: 'Acordes/LaMayor.png' }
    };

    if (!chordSteps[currentChord]) return;

    // Mostrar imagen del acorde
    document.getElementById('chord-image').innerHTML = `<img src="${chordSteps[currentChord].image}" 
        alt="Acorde ${currentChord}" style="max-width: 100%; height: auto;">`;
    document.getElementById('chord-image').style.display = 'block';

    // Reproducir el sonido
    playSound(chordSteps[currentChord].file);
}

// Función para actualizar el acorde en el modal y mostrar instrucciones
function playChord(chord) {
    currentChord = chord; // Actualizar acorde actual
    const instructions = document.getElementById('instructions');
    const chordTitle = document.getElementById('chord-title');

    const chordSteps = {
        'C': `<h2>Pasos para el acorde de Do (C)</h2>
              <p>1. Dedo anular en el tercer traste de la quinta cuerda.</p>
              <p>2. Dedo corazón en el segundo traste de la cuarta cuerda.</p>
              <p>3. Dedo índice en el primer traste de la segunda cuerda.</p>`,
        'D': `<h2>Pasos para el acorde de Re (D)</h2>
              <p>1. Índice en la cuerda 3 del traste 2.</p>
              <p>2. Anular en la cuerda 2 del traste 3.</p>
              <p>3. Corazón en la cuerda 1 del traste 2.</p>`,
        'E': `<h2>Pasos para el acorde de Mi (E)</h2>
              <p>1. Índice en el primer traste de la tercera cuerda.</p>
              <p>2. Corazón en el segundo traste de la quinta cuerda.</p>
              <p>3. Anular en el segundo traste de la cuarta cuerda.</p>`,
        'A': `<h2>Pasos para el acorde de La (A)</h2>
              <p>1. Índice en el segundo traste de la cuarta cuerda.</p>
              <p>2. Corazón en el segundo traste de la tercera cuerda.</p>
              <p>3. Anular en el segundo traste de la segunda cuerda.</p>`
    };

    // Actualizar título e instrucciones
    chordTitle.textContent = "Acorde: " + chord;
    instructions.innerHTML = chordSteps[chord] || "No hay instrucciones disponibles.";
    
    // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
    document.getElementById('chord-image').style.display = 'none';
}

// Función para cambiar de acorde y actualizar la vista
function changeChord(step) {
    const chords = ['C', 'D', 'E', 'A'];
    let currentIndex = chords.indexOf(currentChord);

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    currentIndex += step;

    if (currentIndex >= 0 && currentIndex < chords.length) {
        currentChord = chords[currentIndex];
        playChord(currentChord);
    } else {
        alert('No hay más acordes disponibles.');
        return;
    }

    // Mostrar u ocultar los botones de navegación
    document.getElementById('prev-button').style.display = currentIndex > 0 ? 'block' : 'none';
    document.getElementById('next-button').style.display = currentIndex < chords.length - 1 ? 'block' : 'none';


    // Mostrar el botón "Finalizar" solo si estamos en el último acorde
    document.getElementById('finish-button').style.display = currentIndex === chords.length - 1 ? 'block' : 'none';

    // Mensajes de depuración
    console.log("Índice actual:", currentIndex);
    console.log("Número total de acordes:", chords.length);
    console.log("¿Es el último acorde?:", currentIndex === chords.length - 1);
}


// Función para finalizar la lección y cerrar el modal
function finishLesson() {
    document.getElementById('modalOverlay').style.display = 'none';
    
}

// Función para mostrar el siguiente acorde
function showNextChord() {
    changeChord(1);
}

// Función para mostrar el acorde anterior
function showPrevChord() {
    changeChord(-1);
}



// Asignar eventos al abrir y cerrar el modal
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'block';
    playChord(this.getAttribute('data-chord')); // Cargar acorde al abrir
});

document.getElementById('closeModal').addEventListener('click', closeModal);

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
});

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}




//modal 2

let currentChord2 = 'G';
let audio2 = null;

// Función para reproducir el sonido
function playSound2(audioFile) {
    if (audio2) {
        audio2.pause();
        audio2.currentTime = 0;
    }
    audio2 = new Audio('sonido/' + audioFile);
    audio2.play().catch(error => console.error("Error al reproducir el audio:", error));
}

// Función para reproducir el sonido y mostrar la imagen del acorde
function playCurrentSound2() {
    const chordSteps2 = {
        'G': { file: 'Sol.mp3', image: 'Acordes/ABasicos/Mayores/SolMayor.png' },
        'A': { file: 'La.mp3', image: 'Acordes/LaMayor.png' },
        'D': { file: 'Re.mp3', image: 'Acordes/ReMayor.png' }
    };

    if (!chordSteps2[currentChord2]) return;

    // Mostrar imagen del acorde
    document.getElementById('chord-image2').innerHTML = `<img src="${chordSteps2[currentChord2].image}" 
        alt="Acorde ${currentChord2}" style="max-width: 100%; height: auto;">`;
    document.getElementById('chord-image2').style.display = 'block';

    // Reproducir el sonido
    playSound2(chordSteps2[currentChord2].file);
}

// Función para actualizar el acorde en el modal y mostrar instrucciones
function playChord2(chord) {
    currentChord2 = chord; // Actualizar acorde actual
    const instructions2 = document.getElementById('instructions2');
    const chordTitle2 = document.getElementById('chord-title2');

    const chordSteps2 = {
        'G': `<h2>Pasos para el acorde de Sol (G)</h2>
              <p>1. Coloque el dedo medio en el tercer traste de la sexta cuerda.</p>
              <p>2. Coloque el dedo índice en el segundo traste de la quinta cuerda.</p>
              <p>3. Coloque el dedo anular en el tercer traste de la primera cuerda.</p>`,
        'A': `<h2>Pasos para el acorde de Si (B)</h2>
              <p>1. Coloque el dedo índice en el segundo traste de la quinta cuerda.</p>
              <p>2. Coloque el dedo anular en el cuarto traste de la cuarta cuerda.</p>
              <p>3. Coloque el dedo meñique en el cuarto traste de la tercera cuerda.</p>
              <p>4. Presione todas las cuerdas con el índice en el segundo traste (cejilla).</p>`,
        'D': `<h2>Pasos para el acorde de Fa (F)</h2>
              <p>1. Coloque el dedo índice en todas las cuerdas del primer traste (cejilla).</p>
              <p>2. Coloque el dedo medio en el segundo traste de la tercera cuerda.</p>
              <p>3. Coloque el dedo anular en el tercer traste de la quinta cuerda.</p>
              <p>4. Coloque el dedo meñique en el tercer traste de la cuarta cuerda.</p>`
    };

    // Actualizar título e instrucciones
    chordTitle2.textContent = "Acorde: " + chord;
    instructions2.innerHTML = chordSteps2[chord] || "No hay instrucciones disponibles.";

    // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
    document.getElementById('chord-image2').style.display = 'none';
}

// Función para cambiar de acorde y actualizar la vista
function changeChord2(step) {
    const chords2 = ['G', 'A', 'D']; // Lista de acordes disponibles
    let currentIndex2 = chords2.indexOf(currentChord2);

    if (currentIndex2 === -1) {
        console.error("Error: El acorde actual no se encuentra en la lista.");
        return;
    }
       
    currentIndex2 += step;

    // Validar que el índice esté dentro del rango
    if (currentIndex2 < 0) {
        alert('Este es el primer acorde.');
        return;
    }

    if (currentIndex2 >= chords2.length) {
        alert('No hay más acordes disponibles.');
        return;
    }

    // Actualizar acorde y UI
    currentChord2 = chords2[currentIndex2];
    playChord2(currentChord2); // Actualiza la información en la pantalla

    // Mostrar u ocultar botones de navegación correctamente
    document.getElementById('prev-button2').style.display = currentIndex2 > 0 ? 'block' : 'none';
    document.getElementById('next-button2').style.display = currentIndex2 < chords2.length - 1 ? 'block' : 'none';
    document.getElementById('finish-button2').style.display = currentIndex2 === chords2.length - 1 ? 'block' : 'none';

    console.log("Índice actual:", currentIndex2, "Acorde actual:", currentChord2);
}
    


// Función para finalizar la lección y cerrar el modal
function finishLesson2() {
    document.getElementById('modalOverlay2').style.display = 'none';
}

// Función para mostrar el siguiente acorde
document.getElementById('next-button2').addEventListener('click', function() {
    changeChord2(1); // Avanzar al siguiente acorde
});

document.getElementById('prev-button2').addEventListener('click', function() {
    changeChord2(-1); // Retroceder al acorde anterior
});

document.getElementById('finish-button2').addEventListener('click', function() {
    finishLesson2(); // Finalizar la lección
});

// Asignar eventos al abrir y cerrar el modal
document.getElementById('openModal2').addEventListener('click', function() {
    document.getElementById('modalOverlay2').style.display = 'block';
    playChord2(this.getAttribute('data-chord')); // Cargar acorde al abrir
});

document.getElementById('closeModal2').addEventListener('click', closeModal2);

document.getElementById('modalOverlay2').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay2')) {
        closeModal2();
    }
});



//modalacordesmenores

let currentChord3 = 'C';
let audio3 = null;

// Función para reproducir el sonido
function playSound3(audioFile) {
    if (audio3) {
        audio3.pause();
        audio3.currentTime = 0;
    }
    audio3 = new Audio('sonido/' + audioFile);
    audio3.play().catch(error => console.error("Error al reproducir el audio:", error));
}

// Función para reproducir el sonido y mostrar la imagen del acorde
function playCurrentSound3() {
    const chordSteps3 = {
        'C': { file: 'DoMenor.mp3', image: 'Acordes/DoMenor.png' },
        'D': { file: 'ReMenor.mp3', image: 'Acordes/ReMenor.png' },
        'E': { file: 'MiMenor.mp3', image: 'Acordes/MiMenor.png' },
        'A': { file: 'LaMenor.mp3', image: 'Acordes/LaMenor.png' }
    };

    if (!chordSteps3[currentChord3]) return;

    // Mostrar imagen del acorde
    document.getElementById('chord-image2').innerHTML = `<img src="${chordSteps3[currentChord3].image}" 
        alt="Acorde ${currentChord3}" style="max-width: 100%; height: auto;">`;
    document.getElementById('chord-image2').style.display = 'block';

    // Reproducir el sonido
    playSound3(chordSteps3[currentChord3].file);
}

// Función para actualizar el acorde en el modal y mostrar instrucciones
function playChord3(chord) {
    currentChord3 = chord; // Actualizar acorde actual
    const instructions3 = document.getElementById('instructions3');
    const chordTitle3 = document.getElementById('chord-title3');

    const chordSteps3 = {
        'C': `<h2>Pasos para el acorde de Do menor (Cm)</h2>
              <p>1. Coloque el dedo índice en todas las cuerdas del tercer traste (cejilla).</p>
              <p>2. Coloque el dedo anular en el quinto traste de la cuarta cuerda.</p>
              <p>3. Coloque el dedo meñique en el quinto traste de la tercera cuerda.</p>`,

        'D': `<h2>Pasos para el acorde de Re menor (Dm)</h2>
              <p>1. Coloque el dedo índice en el primer traste de la primera cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la tercera cuerda.</p>
              <p>3. Coloque el dedo anular en el tercer traste de la segunda cuerda.</p>`,

        'E': `<h2>Pasos para el acorde de Mi menor (Em)</h2>
              <p>1. Coloque el dedo medio en el segundo traste de la quinta cuerda.</p>
              <p>2. Coloque el dedo anular en el segundo traste de la cuarta cuerda.</p>`,

        'A': `<h2>Pasos para el acorde de La menor (Am)</h2>
              <p>1. Coloque el dedo índice en el primer traste de la segunda cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la cuarta cuerda.</p>
              <p>3. Coloque el dedo anular en el segundo traste de la tercera cuerda.</p>`
    };

    // Actualizar título e instrucciones
    chordTitle3.textContent = "Acorde: " + chord;
    instructions3.innerHTML = chordSteps3[chord] || "No hay instrucciones disponibles.";

    // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
    document.getElementById('chord-image2').style.display = 'none';
}

// Función para cambiar de acorde y actualizar la vista
function changeChord3(step) {
    const chords3 = ['C', 'D', 'E', 'A']; // Lista de acordes disponibles
    let currentIndex3 = chords3.indexOf(currentChord3);

    if (currentIndex3 === -1) {
        console.error("Error: El acorde actual no se encuentra en la lista.");
        return;
    }

    currentIndex3 += step;

    // Validar que el índice esté dentro del rango
    if (currentIndex3 < 0) {
        alert('Este es el primer acorde.');
        return;
    }

    if (currentIndex3 >= chords3.length) {
        alert('No hay más acordes disponibles.');
        return;
    }

    // Actualizar acorde y UI
    currentChord3 = chords3[currentIndex3];
    playChord3(currentChord3); // Actualiza la información en la pantalla

    // Mostrar u ocultar botones de navegación correctamente
    document.getElementById('prev-button2').style.display = currentIndex3 > 0 ? 'block' : 'none';
    document.getElementById('next-button2').style.display = currentIndex3 < chords3.length - 1 ? 'block' : 'none';
    document.getElementById('finish-button2').style.display = currentIndex3 === chords3.length - 1 ? 'block' : 'none';

    console.log("Índice actual:", currentIndex3, "Acorde actual:", currentChord3);


}

// Función para finalizar la lección y cerrar el modal
function finishLesson3() {
    document.getElementById('modalOverlay3').style.display = 'none';
}
// Lista de acordes disponibles
const chords3 = ['C', 'D', 'E', 'A'];
let currentChordIndex3 = 0;

// Función para cambiar de acorde y actualizar la vista
function changeChord3(step) {
    currentChordIndex3 += step;

    // Validar que el índice esté dentro del rango
    if (currentChordIndex3 < 0) {
        alert('Este es el primer acorde.');
        currentChordIndex3 = 0;
        return;
    }

    if (currentChordIndex3 >= chords3.length) {
        alert('No hay más acordes disponibles.');
        currentChordIndex3 = chords3.length - 1;
        return;
    }

    // Actualizar acorde actual
    currentChord3 = chords3[currentChordIndex3];
    playChord3(currentChord3);

    // Mostrar u ocultar botones de navegación correctamente
    document.getElementById('prev-button3').style.display = currentChordIndex3 > 0 ? 'block' : 'none';
    document.getElementById('next-button3').style.display = currentChordIndex3 < chords3.length - 1 ? 'block' : 'none';
    document.getElementById('finish-button3').style.display = currentChordIndex3 === chords3.length - 1 ? 'block' : 'none';
}

// Eventos para los botones
document.getElementById('next-button3').addEventListener('click', function() {
    changeChord3(1);
});

document.getElementById('prev-button3').addEventListener('click', function() {
    changeChord3(-1);
});

document.getElementById('finish-button3').addEventListener('click', function() {
    document.getElementById('modalOverlay3').style.display = 'none';
});



// Asignar eventos al abrir y cerrar el modal
document.getElementById('openModal3').addEventListener('click', function() {
    document.getElementById('modalOverlay3').style.display = 'block';
    playChord3(this.getAttribute('data-chord')); // Cargar acorde al abrir
});

document.getElementById('closeModal3').addEventListener('click', closeModal3);

document.getElementById('modalOverlay3').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay3')) {
        closeModal3();
    }
});

// Función para cerrar el modal
function closeModal3() {
    document.getElementById('modalOverlay3').style.display = 'none';
}



//parte 2 menores

let currentChord4 = 'G';
let audio4 = null;

// Función para reproducir el sonido
function playSound4(audioFile) {
    if (audio4) {
        audio4.pause();
        audio4.currentTime = 0;
    }
    audio4 = new Audio('sonido/' + audioFile);
    audio4.play().catch(error => console.error("Error al reproducir el audio:", error));
}

// Función para reproducir el sonido y mostrar la imagen del acorde
function playCurrentSound4() {
    const chordSteps4 = {
        'G': { file: 'SolMenor.mp3', image: 'Acordes/SolMenor.png' },
        'B': { file: 'SiMenor.mp3', image: 'Acordes/SiMenor.png' },
        'F': { file: 'FaMenor.mp3', image: 'Acordes/FaMenor.png' }
    };

    if (!chordSteps4[currentChord4]) return;

    // Mostrar imagen del acorde
    document.getElementById('chord-image4').innerHTML = `<img src="${chordSteps4[currentChord4].image}" 
        alt="Acorde ${currentChord4}" style="max-width: 100%; height: auto;">`;
    document.getElementById('chord-image4').style.display = 'block';

    // Reproducir el sonido
    playSound4(chordSteps4[currentChord4].file);
}

// Función para actualizar el acorde en el modal y mostrar instrucciones
function playChord4(chord) {
    currentChord4 = chord; // Actualizar acorde actual
    const instructions4 = document.getElementById('instructions4');
    const chordTitle4 = document.getElementById('chord-title4');

    const chordSteps4 = {
        'G': `<h2>Pasos para el acorde de Sol menor (Gm)</h2>
              <p>1. Coloque el dedo índice en todas las cuerdas del tercer traste (cejilla).</p>
              <p>2. Coloque el dedo anular en el quinto traste de la quinta cuerda.</p>
              <p>3. Coloque el dedo meñique en el quinto traste de la cuarta cuerda.</p>`,

        'B': `<h2>Pasos para el acorde de Si menor (Bm)</h2>
              <p>1. Coloque el dedo índice en todas las cuerdas del segundo traste (cejilla).</p>
              <p>2. Coloque el dedo medio en el tercer traste de la segunda cuerda.</p>
              <p>3. Coloque el dedo anular en el cuarto traste de la cuarta cuerda.</p>
              <p>4. Coloque el dedo meñique en el cuarto traste de la tercera cuerda.</p>`,

        'F': `<h2>Pasos para el acorde de Fa menor (Fm)</h2>
              <p>1. Coloque el dedo índice en todas las cuerdas del primer traste (cejilla).</p>
              <p>2. Coloque el dedo anular en el tercer traste de la quinta cuerda.</p>
              <p>3. Coloque el dedo meñique en el tercer traste de la cuarta cuerda.</p>`
    };

    // Actualizar título e instrucciones
    chordTitle4.textContent = "Acorde: " + chord;
    instructions4.innerHTML = chordSteps4[chord] || "No hay instrucciones disponibles.";

    // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
    document.getElementById('chord-image4').style.display = 'none';
}

// Lista de acordes disponibles
const chords4 = ['G', 'B', 'F'];
let currentChordIndex4 = 0;

// Función para cambiar de acorde y actualizar la vista
function changeChord4(step) {
    currentChordIndex4 += step;

    // Validar que el índice esté dentro del rango
    if (currentChordIndex4 < 0) {
        alert('Este es el primer acorde.');
        currentChordIndex4 = 0;
        return;
    }

    if (currentChordIndex4 >= chords4.length) {
        alert('No hay más acordes disponibles.');
        currentChordIndex4 = chords4.length - 1;
        return;
    }

    // Actualizar acorde actual
    currentChord4 = chords4[currentChordIndex4];
    playChord4(currentChord4);

    // Mostrar u ocultar botones de navegación correctamente
    document.getElementById('prev-button4').style.display = currentChordIndex4 > 0 ? 'block' : 'none';
    document.getElementById('next-button4').style.display = currentChordIndex4 < chords4.length - 1 ? 'block' : 'none';
    document.getElementById('finish-button4').style.display = currentChordIndex4 === chords4.length - 1 ? 'block' : 'none';
}

// Eventos para los botones
document.getElementById('next-button4').addEventListener('click', function() {
    changeChord4(1);
});

document.getElementById('prev-button4').addEventListener('click', function() {
    changeChord4(-1);
});

document.getElementById('finish-button4').addEventListener('click', function() {
    document.getElementById('modalOverlay4').style.display = 'none';
});

// Asignar eventos al abrir y cerrar el modal
document.getElementById('openModal4').addEventListener('click', function() {
    document.getElementById('modalOverlay4').style.display = 'block';
    playChord4(this.getAttribute('data-chord')); // Cargar acorde al abrir
});

document.getElementById('closeModal4').addEventListener('click', closeModal4);

document.getElementById('modalOverlay4').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay4')) {
        closeModal4();
    }
});

// Función para cerrar el modal
function closeModal4() {
    document.getElementById('modalOverlay4').style.display = 'none';
}




//de 7



let currentChord5 = 'C';
let audio5 = null;

// Función para reproducir el sonido
function playSound5(audioFile) {
    if (audio5) {
        audio5.pause();
        audio5.currentTime = 0;
    }
    audio5 = new Audio('sonido/' + audioFile);
    audio5.play().catch(error => console.error("Error al reproducir el audio:", error));
}

// Función para reproducir el sonido y mostrar la imagen del acorde
function playCurrentSound5() {
    const chordSteps5 = {
        'C': { file: 'Do7.mp3', image: 'Acordes/Do7.png' },
        'D': { file: 'Re7.mp3', image: 'Acordes/Re7.png' },
        'E': { file: 'Mi7.mp3', image: 'Acordes/Mi7.png' },
        'A': { file: 'La7.mp3', image: 'Acordes/La7.png' }
    };

    if (!chordSteps5[currentChord5]) return;

    // Mostrar imagen del acorde
    document.getElementById('chord-image5').innerHTML = `<img src="${chordSteps5[currentChord5].image}" 
        alt="Acorde ${currentChord5}" style="max-width: 100%; height: auto;">`;
    document.getElementById('chord-image5').style.display = 'block';

    // Reproducir el sonido
    playSound5(chordSteps5[currentChord5].file);
}

// Función para actualizar el acorde en el modal y mostrar instrucciones
function playChord5(chord) {
    currentChord5 = chord; // Actualizar acorde actual
    const instructions5 = document.getElementById('instructions5');
    const chordTitle5 = document.getElementById('chord-title5');

    const chordSteps5 = {
        'C': `<h2>Pasos para el acorde de Do 7 (C7)</h2>
              <p>1. Coloque el dedo índice en el primer traste de la segunda cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la cuarta cuerda.</p>
              <p>3. Coloque el dedo anular en el tercer traste de la quinta cuerda.</p>`, 

        'D': `<h2>Pasos para el acorde de Re 7 (D7)</h2>
              <p>1. Coloque el dedo índice en el segundo traste de la tercera cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la primera cuerda.</p>
              <p>3. Coloque el dedo anular en el tercer traste de la segunda cuerda.</p>`, 

        'E': `<h2>Pasos para el acorde de Mi 7 (E7)</h2>
              <p>1. Coloque el dedo índice en el primer traste de la tercera cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la quinta cuerda.</p>
              <p>3. Coloque el dedo anular en el segundo traste de la cuarta cuerda.</p>`, 

        'A': `<h2>Pasos para el acorde de La 7 (A7)</h2>
              <p>1. Coloque el dedo índice en el segundo traste de la cuarta cuerda.</p>
              <p>2. Coloque el dedo medio en el segundo traste de la tercera cuerda.</p>
              <p>3. Coloque el dedo anular en el segundo traste de la segunda cuerda.</p>`
    };

    // Actualizar título e instrucciones
    chordTitle5.textContent = "Acorde: " + chord;
    instructions5.innerHTML = chordSteps5[chord] || "No hay instrucciones disponibles.";

    // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
    document.getElementById('chord-image5').style.display = 'none';
}

// Lista de acordes disponibles
const chords5 = ['C', 'D', 'E', 'A'];
let currentChordIndex5 = 0;

// Función para cambiar de acorde y actualizar la vista
function changeChord5(step) {
    currentChordIndex5 += step;

    // Validar que el índice esté dentro del rango
    if (currentChordIndex5 < 0) {
        alert('Este es el primer acorde.');
        currentChordIndex5 = 0;
        return;
    }

    if (currentChordIndex5 >= chords5.length) {
        alert('No hay más acordes disponibles.');
        currentChordIndex5 = chords5.length - 1;
        return;
    }

    // Actualizar acorde actual
    currentChord5 = chords5[currentChordIndex5];
    playChord5(currentChord5);

    // Mostrar u ocultar botones de navegación correctamente
    document.getElementById('prev-button5').style.display = currentChordIndex5 > 0 ? 'block' : 'none';
    document.getElementById('next-button5').style.display = currentChordIndex5 < chords5.length - 1 ? 'block' : 'none';
    document.getElementById('finish-button5').style.display = currentChordIndex5 === chords5.length - 1 ? 'block' : 'none';
}

// Eventos para los botones
document.getElementById('next-button5').addEventListener('click', function() {
    changeChord5(1);
});

document.getElementById('prev-button5').addEventListener('click', function() {
    changeChord5(-1);
});

document.getElementById('finish-button5').addEventListener('click', function() {
    document.getElementById('modalOverlay5').style.display = 'none';
});

// Asignar eventos al abrir y cerrar el modal
document.getElementById('openModal5').addEventListener('click', function() {
    document.getElementById('modalOverlay5').style.display = 'block';
    playChord5(this.getAttribute('data-chord')); // Cargar acorde al abrir
});

document.getElementById('closeModal5').addEventListener('click', closeModal5);

document.getElementById('modalOverlay5').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay5')) {
        closeModal5();
    }
});

// Función para cerrar el modal
function closeModal5() {
    document.getElementById('modalOverlay5').style.display = 'none';
}




let currentChord6 = 'G';
    let audio6 = null;

    // Función para reproducir el sonido
    function playSound6(audioFile) {
        if (audio6) {
            audio6.pause();
            audio6.currentTime = 0;
        }
        audio6 = new Audio('sonido/' + audioFile);
        audio6.play().catch(error => console.error("Error al reproducir el audio:", error));
    }

    // Función para reproducir el sonido y mostrar la imagen del acorde
    function playCurrentSound6() {
        const chordSteps6 = {
            'G': { file: 'Sol7.mp3', image: 'Acordes/Sol7.png' },
            'B': { file: 'Si7.mp3', image: 'Acordes/Si7.png' },
            'F': { file: 'Fa7.mp3', image: 'Acordes/Fa7.png' }
        };

        if (!chordSteps6[currentChord6]) return;

        // Mostrar imagen del acorde
        document.getElementById('chord-image6').innerHTML = `<img src="${chordSteps6[currentChord6].image}" 
            alt="Acorde ${currentChord6}" style="max-width: 100%; height: auto;">`;
        document.getElementById('chord-image6').style.display = 'block';

        // Reproducir el sonido
        playSound6(chordSteps6[currentChord6].file);
    }

    // Función para actualizar el acorde en el modal y mostrar instrucciones
    function playChord6(chord) {
        currentChord6 = chord; // Actualizar acorde actual
        const instructions6 = document.getElementById('instructions6');
        const chordTitle6 = document.getElementById('chord-title6');

        const chordSteps6 = {
            'G': `<h2>Pasos para el acorde de Sol7 (G7)</h2>
                  <p>1. Coloque el dedo índice en todas las cuerdas del tercer traste (cejilla).</p>
                  <p>2. Coloque el dedo anular en el quinto traste de la quinta cuerda.</p>
                  <p>3. Coloque el dedo meñique en el quinto traste de la cuarta cuerda.</p>`,
            'B': `<h2>Pasos para el acorde de Si7 (B7)</h2>
                  <p>1. Coloque el dedo índice en el primer traste de la cuarta cuerda.</p>
                  <p>2. Coloque el dedo medio en el segundo traste de la quinta cuerda.</p>
                  <p>3. Coloque el dedo anular en el segundo traste de la tercera cuerda.</p>`,
            'F': `<h2>Pasos para el acorde de Fa7 (F7)</h2>
                  <p>1. Coloque el dedo índice en todas las cuerdas del primer traste (cejilla).</p>
                  <p>2. Coloque el dedo medio en el segundo traste de la tercera cuerda.</p>
                  <p>3. Coloque el dedo anular en el tercer traste de la quinta cuerda.</p>`
        };

        // Actualizar título e instrucciones
        chordTitle6.textContent = "Acorde: " + chord;
        instructions6.innerHTML = chordSteps6[chord] || "No hay instrucciones disponibles.";

        // Ocultar imagen hasta que se haga clic en "Escuchar acorde"
        document.getElementById('chord-image6').style.display = 'none';
    }

    // Lista de acordes disponibles
    const chords6 = ['G', 'B', 'F'];
    let currentChordIndex6 = 0;

    // Función para cambiar de acorde y actualizar la vista
    function changeChord6(step) {
        currentChordIndex6 += step;

        // Validar que el índice esté dentro del rango
        if (currentChordIndex6 < 0) {
            alert('Este es el primer acorde.');
            currentChordIndex6 = 0;
            return;
        }

        if (currentChordIndex6 >= chords6.length) {
            alert('No hay más acordes disponibles.');
            currentChordIndex6 = chords6.length - 1;
            return;
        }

        // Actualizar acorde actual
        currentChord6 = chords6[currentChordIndex6];
        playChord6(currentChord6);

        // Mostrar u ocultar botones de navegación correctamente
        document.getElementById('prev-button6').style.display = currentChordIndex6 > 0 ? 'block' : 'none';
        document.getElementById('next-button6').style.display = currentChordIndex6 < chords6.length - 1 ? 'block' : 'none';
        document.getElementById('finish-button6').style.display = currentChordIndex6 === chords6.length - 1 ? 'block' : 'none';
    }

    // Eventos para los botones
    document.getElementById('next-button6').addEventListener('click', function() {
        changeChord6(1);
    });

    document.getElementById('prev-button6').addEventListener('click', function() {
        changeChord6(-1);
    });

    document.getElementById('finish-button6').addEventListener('click', function() {
        document.getElementById('modalOverlay6').style.display = 'none';
    });

    // Asignar eventos al abrir y cerrar el modal
    document.getElementById('openModal6').addEventListener('click', function() {
        document.getElementById('modalOverlay6').style.display = 'block';
        playChord6(this.getAttribute('data-chord')); // Cargar acorde al abrir
    });

    document.getElementById('closeModal6').addEventListener('click', closeModal6);

    document.getElementById('modalOverlay6').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay6')) {
            closeModal6();
        }
    });

    // Función para cerrar el modal
    function closeModal6() {
        document.getElementById('modalOverlay6').style.display = 'none';
    }