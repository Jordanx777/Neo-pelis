<!DOCTYPE html>
<html lang="en">

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lista de comentarios</title>
</head>

<body>
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>comentario</th>
                    <th>
                        eliminar
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $conexion = new mysqli("localhost", "root", "", "rol");
                $consulta = $conexion->query("SELECT * FROM comentarios");
                while ($sql = $consulta->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $sql["id"] ?></td>
                        <td><?php echo $sql["nombre"] ?></td>
                        <td><?php echo $sql["comentario"] ?></td>
                        <td>
                            <a href="">eliminar</a>
                        </td>
                    </tr>
                <?php
                }

                ?>
            </tbody>

        </table>
    </div>
</body>

</html>