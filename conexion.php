<?php
$host = "localhost"; // Cambiar a la configuración de tu servidor
$user = "root"; // Usuario de tu servidor MySQL
$password = ""; // Contraseña de tu servidor MySQL
$database = "guitarpro";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
