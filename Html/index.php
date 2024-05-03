<?php //
// $filas = $_GET["id_cargo"];
// ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--bootstrap-->
  <!-- <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script> -->
  <!--material css-->
  <script src="https://www.youtube.com/iframe_api"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <!--css-->
  <link rel="stylesheet" href="../Css/peliculas1.1.css" />
  <title>Neo-Pelis</title>
</head>

<body>
  <header>
    <a href="#" class="logo">Neo-Movies</a>
    <ul class="nav">
      <li><a href="#" class="letra">Home</a></li>
      <li><a href="#" class="letra">Peliculas</a></li>
      <li><a href="../Html/anime.html" class="letra">Animes</a></li>
      <li><a href="#" class="letra">Favoritos</a></li>
    </ul>

    <form action="" method="post" id="form">
      <div class="search">
        <input type="text" placeholder="buscar" id="buscar" class="input-group mb-3" />
      </div>
    </form>
  </header>
  <!-- The overlay -->
  <div id="myNav" class="overlay">
    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn" id="btnCerrar">&times;</a>
    <!-- Overlay content -->
    <div class="overlay-content" id="overlay-content"></div>
  </div>
  <!---->
  <div class="banner" id="banner">
    <!---->
    <div class="content active">
      <!--  -->
      <img src="../img/Avengers-Logo.png" class="title-peli" alt="" />
      <!--  -->
      <p id="overvie">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        optio, dolores suscipit eveniet quis nemo velit minus nam explicabo
        <br />
        nulla commodi accusamus, culpa ipsa provident iure inventore maiores
        voluptatem sunt.
      </p>
      <!--  -->
      <h4 id="califi">
        <span>2023</span>
        <span>12+</span>
        <span>2h 14min</span>
        <span>genero</span>
      </h4>
      <!--  -->
      <div class="button">
        <a href="#">boton de play</a>
        <a href="#">boton plus</a>
      </div>
    </div>
  </div>
  <!--  -->
  <div id="tags" class="generos">
    <div class="tag">Accion</div>
    <div class="tag">Comedia</div>
    <div class="tag">Terror</div>
    <div class="tag">Suspenso</div>
    <div class="tag">Romance</div>
  </div>
  <!--  -->
  <main id="main">
    <div class="movie"></div>
  </main>
  <!----------------------------------------- Scripts ------------------------------------------->
  <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
  <script src="../Js/app1.js"></script>
  <script src="../Js/pruebas.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <!--<script>
      $(document).ready(function () {
        $(".carousel").carousel();
      });
    </script>--><?php session_start();
                if (isset($_SESSION["correo"])) {
                  echo "<p>hola</p>" . $_SESSION['correo']; ?>
    <div class="comentario">
      <div class="camilo">
        <form action="../Php/controller/ControladorComentarios.php" method="post">
          <p>envianos tus comentarios</p><br>
          <input name="correo" type="hidden" value="<?= $_SESSION['correo']?>">
          <label for="">nombre</label><br>
          <input required name="nombre" type="texarea"><br>
          <label for="">dejanos tu comentario</label><br>
          <textarea required name="comentario" class="descr" id="" cols="30" rows="10"></textarea>
          <!-- <input    type="texarea"><br> -->
          <input name="enviar" value="enviar comentario" type="submit"><br>
        </form>
        <div class="col-8 p-4">
          <table class="table">
            <thead class="bs-info">
              <tr>
                <th>id</th>
                <th>correo</th>
                <th>nombre</th>
                <th>comentario</th><?php session_start();
                // include "../model/ModellValidacion.php";
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
        <!-- <a href="../Php/views/tabla.php">ver comentarios</a><br> -->
        
        <a href="../Php/controller/ControladorSalir.php">cerrar sesion</a>
      </div>
    </div>
  <?php
                } else {
                  echo '<div class="comentario">
                   <div class="camilo">


                  <a href="../Php/views/login.php">iniciar sesion</a>
                  </div>
              
                </div>';
                } ?>



</body>

</html>