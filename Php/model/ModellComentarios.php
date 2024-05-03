<?php
    class comentario{
        public function comentarios($nombre,$comentarios){
            $conexion = new mysqli("localhost", "root", "", "rol");
            $inser = $conexion->query("INSERT INTO comentarios (nombre,comentario) VALUES ('$nombre','$comentarios') ");
            if ($inser) {
               echo   "gracias por comentar sphp :(";
            //    include "../../Html/index.php";
            header("Location:../../Html/index.php");
            }
            else {
                $error = "error";
            }

        }
    }
?>