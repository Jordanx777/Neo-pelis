<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inico de sesion</title>
</head>

<body>
    <div class="row g-3 align-items-center mx-auto">
        <?php if (isset($error)) : ?>
            <p><?php echo $error; ?></p>
        <?php endif; ?>

        <h2>inicio de sesion</h2>
        <div class="col-auto">
            <form action="../controller/ControllerValidacion.php" method="post">
                <input class="form-control" name="correo" placeholder="Ingrese su correo" type="email"><br>
                <input class="form-control" name="contraseña" placeholder="Ingrese su contraseña" type="password"><br>
                <input name="inicio" type="submit" class="btn btn-primary mb-3" value="iniciar sesion"><br>
                <a href="../views/formulario.php">registrate</a>
            </form>
        </div>
    </div>


</body>

</html>