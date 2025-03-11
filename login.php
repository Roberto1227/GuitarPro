<?php
include 'conexion.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo_electronico = $_POST['correo_electronico'];
    $contrasena = $_POST['contrasena'];

    // Verificar el usuario en la base de datos
    $query = "SELECT * FROM usuarios WHERE correo_electronico = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $correo_electronico);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verificar la contraseña encriptada
        if (password_verify($contrasena, $user['contrasena'])) {
            // Crear sesión y redirigir al index
            $_SESSION['id'] = $user['id'];
            $_SESSION['nombre_usuario'] = $user['nombre_usuario'];
            $_SESSION['correo_electronico'] = $user['correo_electronico'];
            header("Location: index.html");
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "El correo electrónico no está registrado.";
    }

    $stmt->close();
}
$conn->close();
?>
