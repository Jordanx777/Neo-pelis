<?php
    class comentario{
        public function comentarios($correo,$nombre,$comentarios){
            $conexion = new mysqli("localhost", "root", "", "rol");
            $inser = $conexion->query("INSERT INTO comentarios (correo,nombre,comentario) VALUES ('$correo','$nombre','$comentarios') ");
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