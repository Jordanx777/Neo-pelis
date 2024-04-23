<!DOCTYPE html>
<html lang="en">

<head>
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
            <input name="registro" value="regustrar" type="submit"><br><br>
            <a href="../views/login.php">inicia sesion</a>
        </form>
    </div>
</body>

</html>