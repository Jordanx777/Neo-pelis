<?php
// session_start();

class Validacion
{
    public function Validar($correo, $contraseña)
    {
        $conexion = mysqli_connect("localhost", "root", "", "rol");
        $consulta = ("SELECT nombre,usuario,contraseña,id_cargo FROM usuarios WHERE  usuario = '$correo' AND contraseña = '$contraseña'");

        $resultado = mysqli_query($conexion, $consulta);

        // $filas = mysqli_num_rows($resultado);
        $filas = mysqli_fetch_array($resultado);

        if ($filas["id_cargo"] == 1 ) { //si es 1 es admin
            $_SESSION["correo"] = $correo;
            header("Location:../../Html/index.php?id_cargo=$filas");

        }
        if($filas['id_cargo'] == 2 ){ // si es 2 cliente 
            $_SESSION["correo"] = $correo;
            header("Location:../views/empleado.php");
        }
         else {
            $error = "credenciales erroneas, intentelo de nuevo. ";
            include("../views/login.php");
        }
        // if ($correo === 'c@gmail.com' && $contraseña ==='contraseña') {
        //     return TRUE;
        // }
        // else {
        //     return FALSE;
        // }
        mysqli_free_result($resultado);
        mysqli_close($conexion);
    }
}
