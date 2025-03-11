document.addEventListener("DOMContentLoaded", () => {
    // Cargar información del usuario al cargar la página
    fetch("get_user_info.php")
        .then((response) => response.json())
        .then((data) => {
            if (data.authenticated) {
                // Actualizar datos del usuario en la página
                document.getElementById("foto-perfil").src = data.foto_perfil || "imagenes/default_profile_picture.png";
                document.getElementById("nombre-usuario").textContent = "Nombre de Usuario: " + data.nombre_usuario;
                document.getElementById("correo-usuario").textContent = "Correo Electrónico: " + data.correo_electronico;

                // Actualizar barra de progreso (por ejemplo, un 75%)
                document.getElementById("barra-progreso").style.width = (data.progreso || 0) + "%";
            } else {
                // Redirigir al login si no está autenticado
                window.location.href = "registro_login.html";
            }
        })
        .catch((error) => console.error("Error al cargar los datos del usuario:", error));

    // Manejar cambio de foto de perfil
    const form = document.getElementById("form-cambiar-foto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch("cambiar_foto.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                alert(data); // Mostrar mensaje de éxito o error
                location.reload(); // Recargar la página para mostrar la nueva foto
            })
            .catch((error) => console.error("Error al actualizar la foto de perfil:", error));
    });
});
