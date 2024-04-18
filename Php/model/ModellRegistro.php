<?php
    class Registro{
        public function Registrar($nombre,$correo,$contraseña,$rol){
            $conexion = new mysqli("localhost", "root", "", "rol");
            $consulta = $conexion->query("INSERT INTO usuarios (nombre,usuario,contraseña,id_cargo) VALUES ('$nombre','$correo','$contraseña',2)");
            if ($consulta) {
                header("Location:../views/formulario.php");
            }
            else {
                die("error");
            }
        }
    }
?>