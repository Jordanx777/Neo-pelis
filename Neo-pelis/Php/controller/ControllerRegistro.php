<?php
require_once "../model/ModellRegistro.php";
if ($_POST["registro"]) { 
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];
    // $rol = $_POST["rol"];

    $r = new Registro;
    $r->Registrar($nombre,$correo,$contraseña,$rol);

}
?>