<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST['nombre_usuario'];
    $correo_electronico = $_POST['correo_electronico'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar contraseña
    $foto_perfil = 'imagenes/default_profile_picture.png'; // Foto de perfil por defecto

    // Validar que el correo electrónico no se repita
    $query = "SELECT * FROM usuarios WHERE correo_electronico = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $correo_electronico);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "El correo electrónico ya está registrado. Por favor, utiliza otro.";
    } else {
        // Insertar el nuevo usuario
        $query = "INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena, foto_perfil) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssss", $nombre_usuario, $correo_electronico, $contrasena, $foto_perfil);

        if ($stmt->execute()) {
            // Redirigir a la página de lecciones tras registro exitoso
            header("Location: Lecciones.html");
            exit();
        } else {
            echo "Ocurrió un error. Por favor, inténtalo nuevamente.";
        }
    }

    $stmt->close();
}
$conn->close();
?>
