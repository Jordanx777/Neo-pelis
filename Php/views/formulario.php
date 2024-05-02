<!DOCTYPE html>
<html lang="en">

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>regitro</title>
</head>

<body>
    <div>
        <form action="../controller/ControllerRegistro.php" method="post">
            <input required name="nombre" placeholder="Ingrese su nombre" type="text"><br><br>
            <input required name="correo" placeholder="Ingrese un correo" type="email"><br><br>
            <input required name="contraseña" placeholder="Ingrese una contraseña " type="password"><br><br>
            <!-- <section require>rol
                <select name="rol" id="rol">
                    <option value="1">admin</option>
                    <option value="2">usuario</option>
                </select>
            </section><br><br> -->
            <input name="registro" class="btn btn-secondary mb-3" value="registrar" type="submit"><br><br>
            <a href="../views/login.php">inicia sesion</a>
        </form>
    </div>
</body>

</html>