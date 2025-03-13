<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$database = "guitarpro";//Nombre de base de datos

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
