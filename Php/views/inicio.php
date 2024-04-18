
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
</head>
<body>
    
    <?php
    session_start();
    if (isset($_SESSION["nombre"])) {
        echo '<div class="row"><h4 class="text-dark">Hola admin <span class="text-primary">' . $_SESSION['nombre'] . '</span></h4><a class="btn btn-outline-primary text-center" href="../controller/ControladorSalir.php?usuario=salir">Cerrar sesión</a></div>';

    }
    
    ?>
   
</body>
</html>