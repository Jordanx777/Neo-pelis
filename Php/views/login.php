<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inico de sesion</title>
</head>

<body>
    <div>
    <?php if(isset($error)): ?>
        <p><?php echo $error; ?></p>
    <?php endif; ?>
        <h2>inicio de sesion</h2>
        <form action="../controller/ControllerValidacion.php" method="post">
            <input name="correo" type="email"><br><br>
            <input name="contraseña" type="password"><br><br>
            <input name="inicio" type="submit" value="iniciar sesion">
            <a href="../views/formulario.php">registrate</a>
        </form>
    </div>


</body>

</html>