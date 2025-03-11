<?php
session_start();
if (isset($_SESSION['id'])) {
    // Simular progreso y datos del usuario
    echo json_encode([
        "authenticated" => true,
        "nombre_usuario" => $_SESSION['nombre_usuario'],
        "correo_electronico" => $_SESSION['correo_electronico'],
        "foto_perfil" => $_SESSION['foto_perfil'] ?? "imagenes/default_profile_picture.png..png",
        "progreso" => 75 // Cambia esto según la lógica real de progreso
    ]);
} else {
    echo json_encode(["authenticated" => false]);
}
?>
