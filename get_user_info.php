<?php
session_start();
if (isset($_SESSION['id'])) {
    
    echo json_encode([
        "authenticated" => true,
        "nombre_usuario" => $_SESSION['nombre_usuario'],
        "correo_electronico" => $_SESSION['correo_electronico'],
        "foto_perfil" => $_SESSION['foto_perfil'] ?? "imagenes/default_profile_picture.png..png",
        "progreso" => 75 
    ]);
} else {
    echo json_encode(["authenticated" => false]);
}
?>
