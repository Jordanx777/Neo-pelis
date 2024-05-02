<?php
session_start();
require_once "../model/ModellValidacion.php";
if ($_POST["inicio"]) {
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];
    

    $vali = new Validacion();

    $vali->Validar($correo,$contraseña);

}
?>