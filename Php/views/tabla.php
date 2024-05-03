  <!-- <?php 
 $filas = $_GET["id_cargo"];
 ?>  -->
<!DOCTYPE html>
<html lang="en">

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lista de comentarios</title>
</head>

<body>
<div class="col-8 p-4">
          <table class="table">
            <thead class="bs-info">
              <tr>
                <th>id</th>
                <th>correo</th>
                <th>nombre</th>
                <th>comentario</th><?php session_start();
                include "../model/ModellValidacion.php";
                // include "../conexion.php";
                if (isset($_SESSION["correo"]) ) {
                  echo   "<th>
                    eliminar
                  </th>";
                }
                
                ?>
                
                
              </tr>
            </thead>
            <tbody>
              <?php
                  $conexion = new mysqli("localhost", "root", "", "rol");
                //   include ("../conexion.php");
                  $consulta = $conexion->query("SELECT * FROM comentarios");
                  while ($sql = $consulta->fetch_object()) { ?>
                <tr>
                  <td><?= $sql->id ?></td>
                  <td><?= $sql->correo ?></td>
                  <td><?= $sql->nombre ?></td>
                  <td><?= $sql->comentario ?></td>
                  <!-- <td>
                    <a href="">eliminar</a>
                  </td> -->
                </tr>
              <?php
                  }

              ?>
            </tbody>

          </table>
        </div>
</body>

</html>