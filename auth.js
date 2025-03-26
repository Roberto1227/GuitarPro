document.addEventListener("DOMContentLoaded", () => {
    const authItem = document.getElementById("auth-item");

    
    fetch("get_user_info.php")
        .then((response) => response.json())
        .then((data) => {
            if (data.authenticated) {
                authItem.innerHTML = `
                    <a href="perfil.html">
                        <img src="${data.foto_perfil}" alt="Foto de Perfil" class="profile-image" style="width: 30px; border-radius: 50%;">
                        Perfil
                    </a>
                `;
            }
        })
        .catch((error) => console.error("Error al verificar la sesión:", error));
});
