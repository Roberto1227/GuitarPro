<?php
session_start();
session_destroy();
header("Location: registro_login.html"); // Redirigir al formulario de login/registro
exit();
?>
